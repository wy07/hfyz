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
  id: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaybillDetailPage');
    this.id = this.navParams.get('id');
    this.show(this.id);
    console.log('----return---' + JSON.stringify(this.waybill));

  }

  show(id) {
    this.httpService.show(id).subscribe(res => {
      console.log('=====res====' + JSON.stringify(res));
      this.waybill = res.freightWaybill;
    });
  }

}
