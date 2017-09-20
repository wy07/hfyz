import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";
import {OwnerIdentity} from "../../../models/OwnerIdentity";

/**
 * Generated class for the OwnerInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-owner-info',
  templateUrl: 'owner-info.html',
})
export class OwnerInfoPage extends BaseComponent {
  owners: Array<OwnerIdentity>;
  searchOwners: Array<OwnerIdentity>;
  input: string;

  max: number;
  offset: number;
  count: number;
  total: number;

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerInfoPage');
    this.max = 10;
    this.offset = 0;
    this.count = 0;
    this.doRefresh();
  }

  doRefresh(refresher?) {
    this.owners = [];
    this.getOwners(this.max, this.offset).then(res => {
      this.owners = res.ownerList.ownerList;
      this.total = res.ownerList.total;
      this.searchOwners = this.owners;
      this.count = this.searchOwners.length;
      if (refresher) refresher.complete();
    }, err => {
      if (refresher) refresher.complete();
    });
  }

  doInfinite(infiniteScroll?) {//上拉加载更多方法
    this.offset = this.offset + this.max;
    this.getOwners(this.max, this.offset).then((res) => {
      if (res.result) {
        this.owners = this.owners.concat(res.ownerList.ownerList);
        this.searchOwners = this.owners;
        this.count = this.searchOwners.length;
        infiniteScroll.complete();
      }
    });
  }

  async getOwners(max, offset) {
    try {
      let res = this.httpService.getOwners(this.max, this.offset);
      return res;
    } catch (error) {
      console.log('--error-->' + JSON.stringify(error));
    }
  }

  onInput() {
    if (this.input === '') {
      this.searchOwners = this.owners;
      return;
    }
    this.searchOwners = this.owners.filter(
      (owner: OwnerIdentity) => owner.ownerName.indexOf(this.input) > -1);
    this.count = this.searchOwners.length;
  }

  gotoOwnerDetails(owner: OwnerIdentity) {
    this.app.getRootNav().push('OwnerDetailPage', {id: owner.id});
  }

}
