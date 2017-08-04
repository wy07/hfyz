import { Rectification } from './../../../models/rectification.model';
import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the RectificationDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  segment: 'detail/:id',
  defaultHistory: ['LoginPage']
})
@Component({
  selector: 'page-rectification-detail',
  templateUrl: 'rectification-detail.html',
})
export class RectificationDetailPage extends BaseComponent {

  rectification: Rectification;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RectificationDetailPage');
    console.log('navParams ---> '+this.navParams.get("id"));
    this.getDetail(this.navParams.get("id"));
  }

  async getDetail(id: number) {
    try {
      let res = await this.httpService.getRectificationDetail(id);
      this.rectification = res.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
