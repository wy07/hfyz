import { Company } from './../../../models/company.model';
import { BaseComponent } from './../../../components/base/base';
import { Rectification } from './../../../models/rectification.model';
import { Component, OnDestroy } from '@angular/core';
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
export class RectificationOrdersPage extends BaseComponent implements OnDestroy {

  max: number = 10;
  offset: number = 0;
  total: number;
  status: string;
  selectedCompany: Company;
  orders: Array<Rectification>;
  refreshHandle: (company: Company) => void;

  ionViewDidLoad() {
    this.status = this.navParams.data;
    this.selectedCompany = this.navCtrl.parent.viewCtrl.instance.selectedCompany;
    this.subscribeRefreshEvents();
    this.doRefresh();
  }

  subscribeRefreshEvents () {
    this.refreshHandle = (company: Company) => {
      this.selectedCompany = company;
      this.doRefresh();
    };
    this.events.subscribe('rectification:refresh', this.refreshHandle);
  }

  doRefresh (refresher?) {

    /*this.orders = [];
    this.offset = 0;
    this.getRectificationOrders().then((orders: Array<Rectification>) => {
      this.orders = orders;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });*/
  }

  async getRectificationOrders () {
    /*try {
      let res = await this.httpService.getRectification(this.selectedCompany, this.status, this.max, this.offset);
      this.total  = res.total;
      this.offset += res.orders.length;
      return res.orders;
    } catch (error) {
      console.log(JSON.stringify(error));
    }*/
  }

  doInfinite(infiniteScroll) {
    /*this.getRectificationOrders().then((orders: Array<Rectification>) => {
      this.orders = this.orders.concat(orders);
      infiniteScroll.complete();
      infiniteScroll.enable(this.total > this.offset);
    }, err => {
      infiniteScroll.complete();
    });*/
  }

  goToRectificationDetail (order: Rectification) {
    this.app.getRootNav().push('RectificationDetailPage', {id: order.id});
  }

  unSubscribeRefreshEvents () {
      this.events.unsubscribe('rectification:refresh', this.refreshHandle);
  }

  ngOnDestroy () {
    this.unSubscribeRefreshEvents();
  }

}
