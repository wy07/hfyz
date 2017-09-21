import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../../components/base/base";
import {OwnerIdentity} from "../../../../models/OwnerIdentity";

/**
 * Generated class for the OwnerDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-owner-detail',
  templateUrl: 'owner-detail.html',
})
export class OwnerDetailPage extends BaseComponent {
  id: number;
  owner: OwnerIdentity

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerDetailPage');
    this.id = this.navParams.get('id');
    console.log('--'+this.id);
    this.getOwnerDetail(this.id);
  }

  async getOwnerDetail(id) {
    try {
      let res = await this.httpService.getOwnerDetail(id);
      this.owner = res.owner;
      return;
    } catch (error) {
      console.log('--error-->' + JSON.stringify(error));
    }
  }

}
