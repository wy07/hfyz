import {Component} from '@angular/core';
import {IonicPage, IonicPageModule, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";
import {WorkOrder} from "../../../models/workOrder";

/**
 * Generated class for the WorkOrderDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-work-order-detail',
  templateUrl: 'work-order-detail.html',
})
export class WorkOrderDetailPage extends BaseComponent {
  id: number;
  workOrder: WorkOrder;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkOrderDetailPage');
    this.id = this.navParams.get('id');
    this.getWorkOrderDetail(this.id);
  }

  async getWorkOrderDetail(id) {
    try {
      let res = await this.httpService.getWorkOrderDetail(id);
      this.workOrder = res.workOrder;
    } catch (error) {
      console.log("err--->" + JSON.stringify(error));
    }
  }
}
