import { BaseComponent } from './../../../components/base/base';
import { FreightWaybill } from './../../../models/freightWaybill.model';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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

  max: number = 10;
  offset: number = 0;
  total: number;
  status: string;
  waybills: Array<FreightWaybill>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaybillListPage');
    this.status = this.navParams.data;
    this.doRefresh();
  }

  doRefresh (refresher?) {
    this.waybills = [];
    this.offset = 0;
    this.getWaybills().then((waybills: Array<FreightWaybill>) => {
      this.waybills = waybills;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getWaybills () {
    try {
      let res = await this.httpService.getWaybills(this.status, this.max, this.offset);
      this.total  = res.total;
      this.offset += res.waybills.length;
      return res.waybills;
    } catch (error) {
      console.log("err--->"+JSON.stringify(error));
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
}
