import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

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
export class LawListPage {
  lawList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public app: App) {
    this.lawList = this.navParams.get('laws');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LawListPage');
  }

  lawDetail(law: any) {
    this.app.getRootNav().push('LawDetailPage', {id: law.id});
  }

}
