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
  message: any;

  max: number;
  offset: number;

  ionViewDidLoad() {
    /*console.log(this.navCtrl);*/
    this.type = "政策法律法规";
    this.laws = [];
    this.max = 3;
    this.offset = 0;
    this.getLaws();
    this.getMessage();
  }

  lawDetail(law: any) {
    this.app.getRootNav().push('LawDetailPage', {id: law.id});
  }

  lawList() {
    /*console.log('----' + JSON.stringify(laws));*/
    this.app.getRootNav().push('LawListPage');
  }

  async getLaws() {
    try {
      let res = await this.httpService.getLaws(this.type, this.max, this.offset);
      this.laws = res.publishList.publishList;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  moreMessage() {
    this.app.getRootNav().push('');
  }

  messageDetail(mes) {
    this.app.getRootNav().push('', {id: mes.id});
  }

  async getMessage() {
    try {
      let res = this.httpService.getMessage(this.max,this.offset);
      console.log('--INFO-1-'+JSON.stringify(res));
      console.log('--INFO-2-'+JSON.stringify(res.list));
      this.message = res.list;
    } catch (error) {
      console.log('--getMessage Error--' + JSON.stringify(error));
    }
  }

}
