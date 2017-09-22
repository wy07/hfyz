import {Component} from '@angular/core';
import {NavController, NavParams, IonicPage} from 'ionic-angular';

/**
 * Generated class for the WaybillPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-waybill',
  templateUrl: 'waybill.html',
})
export class WaybillPage {

  tabs: Array<{ title: string, page: string, status: string }>;

  constructor() {
    this.tabs = [
      {title: '全部', page: 'WaybillListPage', status: ''},
      {title: '未审核', page: 'WaybillListPage', status: 'CG'},
      {title: '审核中', page: 'WaybillListPage', status: 'SHZ'},
      {title: '审核拒绝', page: 'WaybillListPage', status: 'YJJ'},
      {title: '审核通过', page: 'WaybillListPage', status: 'YJS'}
    ];
  }

}
