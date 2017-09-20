import {BaseComponent} from './../base/base';
import {Component} from '@angular/core';

/**
 * Generated class for the SearchCompanyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-rectification',
  templateUrl: 'search-rectification.html'
})
export class SearchComponent extends BaseComponent {

  input: string;
  from: string;

  private mFiltered: any[];

  ionViewDidLoad() {
    this.from = this.navParams.get("from");
  }

  /**
   * 捕获输入内容
   * @param event
   */
  onInput(event) {
    if (!this.isBlank(event.target.value)) {
      let curSearch = (event.target.value).trim();
      this.search(curSearch);
    }
  }

  async search(search: string) {
    this.httpService.searchCompany(search).subscribe(
      res => {
        this.mFiltered = res.companyList;
        for (const item of this.mFiltered) {
          item.info = `${item.ownerName}`;
        }
      }
    );
  }

  selected(company) {
    this.fromRectificationPage(company);
  }

  fromRectificationPage(company) {
    this.viewCtrl.dismiss(company);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
