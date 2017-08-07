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

  rectificationId: number;
  rectification: Rectification;
  feedback: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad RectificationDetailPage');
    console.log('navParams ---> '+this.navParams.get("id"));
    this.rectificationId = this.navParams.get("id");
    this.getDetail();
  }

  async getDetail() {
    try {
      let res = await this.httpService.getRectificationDetail(this.rectificationId);
      this.rectification = res.data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async submitFeedback () {
    try {
      await this.httpService.rectificaionFeedback(this.rectificationId, this.feedback);
      this.app.getRootNav().pop();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  async confirmFeedback () {
    try {
      await this.httpService.rectificaionConfirm(this.rectificationId);
      this.getDetail();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

}
