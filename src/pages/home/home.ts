import {BaseComponent} from './../../components/base/base';
import {Component} from '@angular/core';
import {NavController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseComponent {
  laws: any;
  type: string;
  max: number;
  offset: number;

  ionViewDidLoad() {
    console.log(this.navCtrl);
    this.type = "政策法律法规";
    this.laws = [];
    this.max = 3;
    this.offset = 0;
    this.getLaws();
  }

  lawDetail(law: any) {
    this.app.getRootNav().push('LawDetailPage', {id: law.id});
  }

  lawList(laws: any) {
    console.log('----' + JSON.stringify(laws));
    this.app.getRootNav().push('LawListPage', {laws: laws});
  }

  async getLaws() {
    try {
      let res = await this.httpService.getLaws(this.type, this.max, this.offset);
      this.laws = res.publishList.publishList;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
