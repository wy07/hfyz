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

  onInput () {
    console.log("==========onInput========"+ this.input);
    this.search(this.input);
  }

  async search (query) {
    try {
      let res = await this.httpService.searchCompanys(query);
      this.companys = res.companys;
    } catch (error) {
      console.log(error);
    }
  }

  selected (company: Company) {
    this.viewCtrl.dismiss(company);
  }

  dismiss () {
    this.viewCtrl.dismiss();
  }
}
