import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {_switch} from "rxjs/operator/switch";

@IonicPage()
@Component({
  templateUrl: 'message-detail.html',
})
export class MessageDetailPage extends BaseComponent {

  private mMessageList: Array<{ id: number, sourceId: number, sourceType: string,
                                content: string, isRead: boolean, dateCreated: string,
                                action: string}>;

  private mMaxRow: number = 8;     // 最多一次请求的行数

  private mTotal: number;

  private mCurrCount: number;

  ionViewWillEnter() {
    this.getMessage(0, false);
  }

  async getMessage(offset: number, isAppend: boolean) {
    try {
      this.httpService.getMessage(this.mMaxRow, offset).subscribe(
        res => {
          if (!isAppend) {
            if (res.total !== 0) {
              this.mTotal = res.total;
              this.mMessageList = res.list;
            }
          } else {
            if (res.total !== 0) {
              this.mTotal = res.total;
              this.mMessageList = this.mMessageList.concat(res.list);
            }
          }
          this.mCurrCount += this.mTotal;
          console.log('数据： \r' + JSON.stringify(res));
          console.log('数量： \r' + res.total);
        }
      );
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  private dealwithWork(mes) {
    switch (mes.sourceType) {
      case 'GD' :

        break;
      case 'YHZGD':
        this.httpService.changeState(mes.id).subscribe(
          res => {
            this.goRectification(mes.sourceId, mes.action);
          }
        );
        break;
      case 'DZLD':

        break;
      default:
        break;
    }
  }

  private goRectification(id: number, status: any) {
    this.httpService.requestOrderDetail(id).subscribe(
      res => {
        if (res.result === 'success') {
          this.navCtrl.push(this.judgmentRectification(status), {
            info: res.hiddenRectificationOrder,
          });
        } else {
          this.showToast('获取数据失败！', 1000, this.SHOW_BOTTOM);
        }
      }
    );
  }

  private judgmentRectification(status: any) {
    let result = '';
    switch (status) {
      case 'DSH' :
        result = 'RectificationAuditPage';
        break;
      case 'DYR':
        result = 'RectificationConfirmPage';
        break;
      case 'DFK':
        result = 'RectificationFeedbackPage';
        break;
      case 'HG':case 'BHG':
        result = 'RectificationDetailPage';
        break
    }
    return result;
  }

  /**
   * 上拉刷新（从头更新数据）
   * @param refresher
   */
  private doRefresh(refresher?) {
    setTimeout(() => {
      this.getMessage(0, false);
      refresher.complete();
    }, 1000);
  }

  /**
   * 下拉刷新（加载数据）
   * @param infiniteScroll
   */
  private doInfinite(refresher?) {
    setTimeout(() => {
      if (this.mTotal <= this.mMessageList.length) {
        refresher.complete();
        this.showToast('没有更多数据！', 1000, this.SHOW_BOTTOM);
      } else {
        this.getMessage(this.mMaxRow * ++this.mCurrCount, true);
        refresher.complete();
      }
    }, 1000);
  }

}
