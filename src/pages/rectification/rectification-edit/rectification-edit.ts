import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rectification-edit',
  templateUrl: 'rectification-edit.html',
})
export class RectificationEditPage extends BaseComponent {

  private mOldMessage: any;      // 当前信息

  private InspectionDate = {
    date: '',
    time: ''
  };

  private DealineDate = {
    date: '',
    time: ''
  };

  ngOnInit() {
    this.mOldMessage = this.navParams.get('info');
    // 检查日期初始化
    let dateTmp = this.mOldMessage.inspectionDate.toString().split(' ');
    this.InspectionDate.date = dateTmp[0];
    this.InspectionDate.time = dateTmp[1];
    // 整改期限初始化
    dateTmp = this.mOldMessage.dealineDate.toString().split(' ');
    this.DealineDate.date = dateTmp[0];
    this.DealineDate.time = dateTmp[1];

    delete this.mOldMessage.inspectionDate;
    delete this.mOldMessage.dealineDate;

  }

  private validation() {
    if (this.isBlank(this.mOldMessage.enterpirse)) {
      this.showToast('请正确填写企业名称！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mOldMessage.area)) {
      this.showToast('请正确填写区域！', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mOldMessage.examiner)) {
      this.showToast('请正确填写检查人姓名', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mOldMessage.insPosition)) {
      this.showToast('请正确填写检查地点', 1000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.mOldMessage.insDesc)) {
      this.showToast('请正确填写检查内容', 1000, this.SHOW_BOTTOM);
      return false;
    }
    return true;
  }

  private submitEdit() {
    if (this.validation()) {
      this.mOldMessage.inspectionDate =
        this.datePipe.transform(new Date(this.InspectionDate.date + ' ' + this.InspectionDate.time), 'yyyy-MM-dd HH:mm');
      this.mOldMessage.dealineDate =
        this.datePipe.transform(new Date(this.DealineDate.date + ' ' + this.DealineDate.time), 'yyyy-MM-dd HH:mm');
      delete this.mOldMessage.status;
      this.httpService.updateRectification(this.mOldMessage.id, this.mOldMessage).subscribe(

        res => {
          console.log(res);
        }
      );
    }
  }

}
