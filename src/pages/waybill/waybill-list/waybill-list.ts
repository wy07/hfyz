import {BaseComponent} from './../../../components/base/base';
import {FreightWaybill} from './../../../models/freightWaybill.model';
import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';

/**
 * Generated class for the WaybillListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waybill-list',
  templateUrl: 'waybill-list.html',
})
export class WaybillListPage extends BaseComponent {
  input: string;
  max: number = 10;
  offset: number = 0;
  total: number;
  status: string;
  waybills: Array<FreightWaybill>;
  searchWaybills: Array<FreightWaybill>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaybillListPage');
    this.status = this.navParams.data;
    console.log('----this.status--' + this.status);
    this.doRefresh();
  }

  doRefresh(refresher?) {
    this.waybills = [];
    this.offset = 0;
    this.getWaybills().then((waybills: Array<FreightWaybill>) => {
      this.waybills = waybills;
      this.searchWaybills = this.waybills;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getWaybills() {
    try {
      let res = await this.httpService.getWaybills(this.status, this.max, this.offset);
      this.total = res.total;
      this.offset += res.resultList.length;
      return res.resultList;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }

  doInfinite(infiniteScroll) {
    this.getWaybills().then((waybills: Array<FreightWaybill>) => {
      this.waybills = this.waybills.concat(waybills);
      infiniteScroll.complete();
      infiniteScroll.enable(this.total > this.offset);
    }, err => {
      infiniteScroll.complete();
    });
  }

  onInput() {
    if (this.input === '') {
      this.searchWaybills = this.waybills;
      return;
    }
    this.searchWaybills = this.waybills.filter(
      (waybill: FreightWaybill) => waybill.vehicleNo.indexOf(this.input) > -1);
  }

  goToWaybillDetail(waybill: FreightWaybill) {
    this.app.getRootNav().push('WaybillDetailPage', {id: waybill.id});
  }

  submit(id) {
    console.log('---list.id--' + id);
  }

  navigateToCreateFreightWaybillPage() {
    this.app.getRootNav().push('CreateFreightWaybillPage');
  }
}
