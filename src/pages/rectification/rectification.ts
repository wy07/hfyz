/*import {Company} from './../../models/company.model';*/
import {BaseComponent} from './../../components/base/base';
import {Component, ViewChild} from '@angular/core';
import {IonicPage, Tabs} from 'ionic-angular';

/**
 * Generated class for the RectificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rectification',
  templateUrl: 'rectification.html',
})
export class RectificationPage extends BaseComponent {

  private mStatus: any;     // 当前查询的企业整改状态
  private mMaxRow: number;     // 最多一次请求的行数
  private mCurrSearch: string;     // 当前搜索的公司名称

  private mOrderList: any[];      // 获取的整改信息数据
  private mTotal: any;          // 查询的总条数

  private mCurrCount: number;      // 当前请求次数
  private isLoadOver: boolean;  // 是否加载完成标志


  private mStatusList: Array<{ label: string, value: string }> = [{label: '全部', value: ''}, {label: '起草', value: '0'},
    {label: '待审核', value: '1'}, {label: '待反馈', value: '2'}, {label: '已拒绝', value: '3'},
    {label: '待确认', value: '4'}, {label: '合格', value: '5'}, {label: '不合格', value: '6'}];              // 状态列表

  ngOnInit() {
    this.initData();
    this.getOrderList(0, false);
  }

  /**
   * 初始化数据，请求所有需要整改的公司名单
   */
  private initData() {
    this.mMaxRow = 8;
    this.mTotal = 0;
    this.isLoadOver = false;
    this.mOrderList = [];
    this.mCurrCount = 0;
  }

  /**
   * 获取企业整改的数据
   */
  private getOrderList(offset: number, isAppend: boolean) {
    this.httpService.requestOrderList(this.mMaxRow, offset, this.mCurrSearch, '', '', status, this.mStatus).subscribe(
      res => {
        if (res.result === 'success') {
          this.mTotal = res.total;
          if (isAppend) {
            this.mOrderList = this.mOrderList.concat(res.hiddenRectificationOrderList);
          } else {
            this.mOrderList = res.hiddenRectificationOrderList;
          }
        } else {
          this.showToast('刷新数据失败！', 1500, this.SHOW_BOTTOM);
        }
      }
    );
  }

  /**
   * 上拉刷新（从头更新数据）
   * @param refresher
   */
  private doRefresh(refresher?) {
    setTimeout(() => {
      this.initData();
      this.getOrderList(0, false);
      refresher.complete();
    }, 1000);


  }

  /**
   * 下拉刷新（加载数据）
   * @param infiniteScroll
   */
  private doInfinite(refresher?) {
    setTimeout(() => {
      if (this.mTotal < this.mOrderList.length) {
        refresher.complete();
        this.showToast('没有更多数据！', 1000, this.SHOW_BOTTOM);
      } else {
        this.getOrderList(this.mMaxRow * ++this.mCurrCount, true);
        refresher.complete();
      }
    }, 1000);
  }

  /**
   * 捕获搜索框输入内容
   */
  private onInput(event) {
    if (!this.isBlank(event.target.value)) {
      this.mCurrSearch = (event.target.value).trim();
    } else {
      this.mCurrSearch = '';
    }
    // 查看输入框是否有数据
    this.initData();
    this.getOrderList(0, false);
  }

  /**
   * 根据状态过滤
   * @param {string} lable
   */
  private selectQuery(value: string) {
    this.mStatus = value;
    this.initData();
    this.getOrderList(0, false);
  }

  private goDetailPage(id: any) {
    this.httpService.requestOrderDetail(id).subscribe(
      res => {
        /*console.log();*/
        if (res.result === 'success') {
          this.navCtrl.push("RectificationDetailPage", {
            info: res.hiddenRectificationOrder,
          });
        } else {
          this.showToast('获取数据失败！', 1000, this.SHOW_BOTTOM);
          /*this._toastr.error('获取数据失败');*/
        }
      }
    );
  }

}
