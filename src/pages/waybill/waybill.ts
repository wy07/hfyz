import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

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

  tabs: Array<{title: string, page: string, status: string}>;

  constructor () {
    this.tabs = [
      {title: '全部', page: 'WaybillListPage', status: 'all'},
      {title: '待审批', page: 'WaybillListPage', status: 'DSP'},
      {title: '已驳回', page: 'WaybillListPage', status: 'YBH'},
      {title: '已完成', page: 'WaybillListPage', status: 'YWC'}
    ];
  }

}
