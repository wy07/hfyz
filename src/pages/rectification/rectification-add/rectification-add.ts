import {BaseComponent} from './../../../components/base/base';
import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {SearchComponent} from "../../../components/search-rectification/search-rectification";

@IonicPage()
@Component({
  selector: 'page-rectification-add',
  templateUrl: 'rectification-add.html',
})
export class RectificationAddPage extends BaseComponent {

  private mNewInfo: any = {};

  private InspectionDate = {
    date: '',
    time: ''
  };

  private DealineDate = {
    date: '',
    time: ''
  };

  private validation() {
    if (this.isBlank(this.mNewInfo.enterpirse)) {
      this.showToast('请正确填写企业名称！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mNewInfo.area)) {
      this.showToast('请正确填写区域！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mNewInfo.examiner)) {
      this.showToast('请正确填写检查人姓名！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mNewInfo.insPosition)) {
      this.showToast('请正确填写检查地点！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mNewInfo.insDesc)) {
      this.showToast('请正确填写检查内容！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    let insTemp = new Date(this.InspectionDate.date + ' ' + this.InspectionDate.time);
    let dealTemp = new Date(this.DealineDate.date + ' ' + this.DealineDate.time);
    if (insTemp.getTime() === dealTemp.getTime()) {
      this.showToast('选择的日期不能相同！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (dealTemp < insTemp) {
      this.showToast('请选择正确的日期！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    return true;
  }

  private searchCompany() {
    let searchCompanyModal = this.modalCtrl.create(SearchComponent, {from: "RectificationEditPage"});
    searchCompanyModal.onDidDismiss(res => {
      if (res) {
        this.mNewInfo.enterpirse = res.ownerName;
        this.mNewInfo.companyCode = res.companyCode;
        let time = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm').split(' ');
        this.InspectionDate.date = time[0];
        this.InspectionDate.time = time[1];
        time = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm').split(' ');
        this.DealineDate.date = time[0];
        this.DealineDate.time = time[1];
      }
    });
    searchCompanyModal.present();
  }

  private submitEdit() {
    this.mNewInfo.inspection =
      this.datePipe.transform(new Date(this.InspectionDate.date + ' ' + this.InspectionDate.time), 'yyyy-MM-dd HH:mm');
    this.mNewInfo.dealine =
      this.datePipe.transform(new Date(this.DealineDate.date + ' ' + this.DealineDate.time), 'yyyy-MM-dd HH:mm');
    this.httpService.addRectification(this.mNewInfo).subscribe(
      res => {
        if (res.result === "success") {
          this.showToast('添加数据成功！', 1500, this.SHOW_TOP);
          this.navCtrl.push('RectificationPage');
        } else {
          this.showToast('添加数据失败，请重试！', 1500, this.SHOW_BOTTOM);
        }
      }
    );
  }

}
