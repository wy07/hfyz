import { FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from './../base/base';
import { Component } from '@angular/core';

/**
 * Generated class for the SearchTrackComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-track',
  templateUrl: 'search-track.html'
})
export class SearchTrackComponent extends BaseComponent {

  trackForm: FormGroup;
  licenseNo: string;
  startDate: any;
  nowTime: Date;
  endDate: any;

  ngOnInit () {
    this.trackForm = this.formBuilder.group({
      query: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    });
    this.nowTime = new Date();
    this.endDate = this.nowTime.toISOString();
    this.nowTime.setHours(new Date().getHours() - 1);
    this.startDate = this.nowTime.toISOString();
  }

  submit () {
    if (this.validate()) {
      console.log("======success=======");
      this.httpService.searchTrack(this.licenseNo, this.datePipe.transform(this.startDate, 'yyyy-MM-dd HH:mm')
        , this.datePipe.transform(this.endDate, 'yyyy-MM-dd HH:mm')).subscribe(
        res => {
          this.viewCtrl.dismiss(res.historyLocations);
        }
      );
    }
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }

  validate() {
    const startDate = new Date(this.startDate).getTime();
    const endDate = new Date(this.endDate).getTime();
    if (!this.licenseNo) {
      this.showToast('请输入车牌号', 1000, this.SHOW_TOP);
      return false;
    }
    if (!this.startDate) {
      this.showToast('请选择开始时间', 1000, this.SHOW_TOP);
      return false;
    }
    if (!this.endDate) {
      this.showToast('请选择结束时间', 1000, this.SHOW_TOP);
      return false;
    }
    if (endDate < startDate) {
      this.showToast('查询结束时间不能小于开始时间', 1000, this.SHOW_TOP);
      return false;
    }
    return true;
  }

}
