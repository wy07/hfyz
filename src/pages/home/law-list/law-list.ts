import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";

/**
 * Generated class for the LawListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-law-list',
  templateUrl: 'law-list.html',
})
export class LawListPage extends BaseComponent {
  lawList: any;
  type: string;
  max: number;
  offset: number;


  ionViewDidLoad() {
    console.log('ionViewDidLoad LawListPage');
    this.type = "政策法律法规";
    this.max = 10;
    this.offset = 0;
    this.getLaws();
  }

  lawDetail(law: any) {
    this.app.getRootNav().push('LawDetailPage', {id: law.id});
  }

  async getLaws() {
    try {
      let res = await this.httpService.getLaws(this.type, this.max, this.offset);
      this.lawList = res.publishList.publishList;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
