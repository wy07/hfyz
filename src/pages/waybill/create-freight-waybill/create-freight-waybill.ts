import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the CreateFreightWaybillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-freight-waybill',
  templateUrl: 'create-freight-waybill.html',
})
export class CreateFreightWaybillPage extends BaseComponent {

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateFreightWaybillPage');
  }

}
