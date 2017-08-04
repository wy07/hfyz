import { BaseComponent } from './../../../components/base/base';
import { Rectification } from './../../../models/rectification.model';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the RectificationOrdersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rectification-orders',
  templateUrl: 'rectification-orders.html',
})
export class RectificationOrdersPage extends BaseComponent {

  max: number = 10;
  offset: number = 0;
  total: number;
  orders: Array<Rectification>;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RectificationOrdersPage');
    this.doRefresh();
  }

  doRefresh (refresher?) {
    this.orders = [];
    this.offset = 0;
    this.getRectificationOrders().then((orders: Array<Rectification>) => {
      this.orders = orders;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  async getRectificationOrders () {
    try {
      let res = await this.httpService.getRectification(1, "DFK", this.max, this.offset);
      this.total  = res.total;
      this.offset += res.orders.length;
      return res.orders;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  doInfinite(infiniteScroll) {
    this.getRectificationOrders().then((orders: Array<Rectification>) => {
      this.orders = this.orders.concat(orders);
      infiniteScroll.complete();
      infiniteScroll.enable(this.total > this.offset);
    }, err => {
      infiniteScroll.complete();
    });
  }

  goToRectificationDetail (order: Rectification) {
    this.navCtrl.push('RectificationDetailPage', {id: order.id});
  }

}
