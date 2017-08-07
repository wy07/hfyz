import { Company } from './../../models/company.model';
import { SearchCompanyComponent } from './../../components/search-company/search-company';
import { BaseComponent } from './../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, Events } from 'ionic-angular';

/**
 * Generated class for the RectificationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rectification',
  templateUrl: 'rectification.html',
})
export class RectificationPage {

  tabs: Array<{title: string, page: string, status: string}>;
  selectedCompany: Company;

  constructor (public modalCtrl: ModalController, public events: Events) {
    this.tabs = [
      {title: '全部', page: 'RectificationOrdersPage', status: 'all'},
      {title: '待反馈', page: 'RectificationOrdersPage', status: 'DFK'},
      {title: '待确认', page: 'RectificationOrdersPage', status: 'DQR'},
      {title: '已完成', page: 'RectificationOrdersPage', status: 'YWC'}
    ];
  }

  searchCompany () {
    let searchCompanyModal = this.modalCtrl.create(SearchCompanyComponent);
    searchCompanyModal.onDidDismiss((company: Company) => {
      console.log("company ---> "+ JSON.stringify(company));
      this.selectedCompany = company;
      this.events.publish('rectification:refresh', company);
    });
    searchCompanyModal.present();
  }

}
