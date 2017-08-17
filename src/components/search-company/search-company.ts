import { Vehicle } from './../../models/vehicle.model';
import { SearchVehicleComponent } from './../search-vehicle/search-vehicle';
import { Company } from './../../models/company.model';
import { BaseComponent } from './../base/base';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the SearchCompanyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-company',
  templateUrl: 'search-company.html'
})
export class SearchCompanyComponent extends BaseComponent {

  input: string;
  companys: Array<Company>;
  filterCompanys: Array<Company>;
  from: string;

  ionViewDidLoad () {
    this.search();
    this.from = this.navParams.get("from");
    console.log("=======SearchCompanyComponent=========" + this.navParams.get("from"));
  }

  onInput () {
    console.log("==========onInput========"+ this.input);
    if (this.input === '') {
      this.filterCompanys = this.companys;
      return;
    }
    this.filterCompanys = this.companys.filter(
      (company: Company) => company.name.indexOf(this.input) > -1);
  }

  async search () {
    try {
      let res = await this.httpService.searchCompanys();
      this.companys = res.companys;
      this.filterCompanys = this.companys;
    } catch (error) {
      console.log(error);
    }
  }

  selected (company: Company) {
    if (this.from === 'RectificationPage') {
      this.fromRectificationPage(company);
    } else {
      this.fromNetworkControlPage(company);
    }
  }

  fromRectificationPage (company: Company) {
    this.viewCtrl.dismiss(company);
  }

  fromNetworkControlPage (company: Company) {
    let searchVehicleModal = this.modalCtrl.create(SearchVehicleComponent, {company});
    searchVehicleModal.onDidDismiss((vehicleNos: Array<String>) => {
      if (vehicleNos) {
        console.log(" ----- searchVehicleModal ---- " + JSON.stringify(vehicleNos));
        this.viewCtrl.dismiss(vehicleNos);
      }
    });
    searchVehicleModal.present();
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }
}
