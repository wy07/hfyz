import {FreightWaybill} from './../../models/freightWaybill.model';
import {Rectification} from './../../models/rectification.model';
import {BaseComponent} from './../../components/base/base';
import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';

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

  max: number;
  offset: number;
  status: string;
  company: any;

  ionViewDidLoad() {
  }

  navigateToWaybillPage() {
    this.app.getRootNav().push('WaybillPage');
  }

  navigateToRectificationPage() {
    this.app.getRootNav().push('RectificationPage');
  }

  navigateToInfoQueryPage() {
    this.app.getRootNav().push('WorkOrderPage');
  }



}
