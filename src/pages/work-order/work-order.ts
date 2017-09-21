import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../components/base/base";
import {WorkOrder} from "../../models/workOrder";
import {max} from "rxjs/operator/max";

/**
 * Generated class for the WorkOrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-work-order',
  templateUrl: 'work-order.html',
})
export class WorkOrderPage extends BaseComponent {
  workOrders: Array<WorkOrder>;
  searchWorkOrders: Array<WorkOrder>;
  input: string;

  total: number;
  max: number;
  offset: number;
  count: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkOrderPage');
    this.max = 10;
    this.offset = 0;
    this.total = 0;
    this.count = 0;
    this.doRefresh();
  }

  doRefresh(refresher?) {
    this.workOrders = [];
    this.getWorkOrders(this.max, this.offset).then(res => {
      this.workOrders = res.workOrderList;
      this.total = res.total;
      this.searchWorkOrders = this.workOrders;
      this.count =  this.searchWorkOrders.length;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  doInfinite(infiniteScroll?) {//上拉加载更多方法
    this.offset = this.offset + this.max;
    this.getWorkOrders(this.max, this.offset).then((res) => {
      if (res.result) {
        this.workOrders = this.workOrders.concat(res.workOrderList);
        this.total = res.total;
        this.searchWorkOrders = this.workOrders;
        this.count =  this.searchWorkOrders.length;
        infiniteScroll.complete();
      }
    });
  }

  async getWorkOrders(max, offset) {
    try {
      let res = await this.httpService.getWorkOrders(this.max, this.offset);
      return res;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }

  workOrderDetail(workOrder: WorkOrder) {
    this.app.getRootNav().push('WorkOrderDetailPage', {id: workOrder.id});
  }

  onInput() {
    if (this.input === '') {
      this.searchWorkOrders = this.workOrders;
      return;
    }
    this.searchWorkOrders = this.workOrders.filter(
      (workOrder: WorkOrder) => workOrder.ownerName.indexOf(this.input) > -1);
    this.count =  this.searchWorkOrders.length;
  }
}
