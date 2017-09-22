import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpService} from "../../../providers/http-service/http-service";

/**
 * Generated class for the LawDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-law-detail',
  templateUrl: 'law-detail.html',
})
export class LawDetailPage {
  id: number;
  law:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService) {
    this.id = this.navParams.get('id');
    this.getLawDetail(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawDetailPage');
  }

  async getLawDetail(id: number) {
    try {
      let res=await this.httpService.getLawDetail(id);
      this.law=res.infoaudit;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }
}
