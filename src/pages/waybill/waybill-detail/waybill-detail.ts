import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";
/**
 * Generated class for the WaybillDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-waybill-detail',
  templateUrl: 'waybill-detail.html',
})
export class WaybillDetailPage extends BaseComponent {
  waybill: any;
  vehicleNo: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaybillDetailPage');
    this.vehicleNo = this.navParams.get('vehicleNo');
    this.show(this.vehicleNo);
    console.log('----return---' + JSON.stringify(this.waybill));

  }

  async show(id) {
    try {
      let res = await this.httpService.show(id);
      this.waybill = res.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
