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
  max:number;
  offset:number;
  listStatus:any;
  status:string;
  company:any;
  sd:any;
  ed:any;

  ionViewDidLoad() {
    // this.doRefresh();
    // this.max=10;
    // this.offset=0;
    // this.listStatus=1;
    // this.status='SHZ';
  }

  // doRefresh (refresher?) {
  //   this.getUpcomingTasks().then(() => {
  //     if (refresher) refresher.complete();
  //   }, err => {
  //     if (refresher) refresher.complete();
  //   });
  // }

  // async getUpcomingTasks () {
  //   try {
  //     let rectification = await this.httpService.getRectification1(this.max,this.offset, this.listStatus);
  //     let waybills = await this.httpService.getWaybills(this.status, this.max, this.offset);
  //     [this.orders, this.waybills] = [rectification.hiddenRectificationOrderList, waybills.resultList];
  //     console.log('---' + JSON.stringify(this.orders));
  //   } catch (error) {
  //     console.log(JSON.stringify(error));
  //   }
  // }
  navigateToWaybillPage() {
    this.app.getRootNav().push('WaybillPage');
  }
  navigateToRectificationPage() {
    this.app.getRootNav().push('RectificationPage');
  }

  navigateToInfoQueryPage () {
    this.app.getRootNav().push('InfoQueryPage');
  }

  // navigateToRectificationDetail (order: Rectification) {
  //   this.navCtrl.push('RectificationDetailPage', {id: order.id});
  // }

  navigateToCreateFreightWaybillPage () {
    this.navCtrl.push('CreateFreightWaybillPage');
  }

}
