import { FreightWaybill } from './../../models/freightWaybill.model';
import { Rectification } from './../../models/rectification.model';
import { BaseComponent } from './../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the BusinessProcessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-business-process',
  templateUrl: 'business-process.html',
})
export class BusinessProcessPage extends BaseComponent {

  orders: Array<Rectification>;
  waybills: Array<FreightWaybill>;

  ionViewDidLoad() {
    this.doRefresh();
  }

  doRefresh (refresher?) {
    this.getUpcomingTasks().then(() => {
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getUpcomingTasks () {
    try {
      let res = await this.httpService.getUpcomingTasks();
      [this.orders, this.waybills] = [res.orders, res.waybills];
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  navigateToRectificationDetail (order: Rectification) {
    this.navCtrl.push('RectificationDetailPage', {id: order.id});
  }

  navigateToCreateFreightWaybillPage () {
    this.navCtrl.push('CreateFreightWaybillPage');
  }

  navigateToFunctionListPage () {
    this.navCtrl.push('FunctionListPage');
  }

}
