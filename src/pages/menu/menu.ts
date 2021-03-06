import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {HomePage} from "../home/home";
import {BaseComponent} from "../../components/base/base";
import {PersonInfoPage} from "../contact/personinfo/personinfo";
import {ChangePwdPage} from "../contact/changPwd/changePwd";

@IonicPage()
@Component({
  templateUrl: 'menu.html'
})
export class MenuPage extends BaseComponent {

  private mUserName: string = this.userData.getUserName();

  private rootPage: any = 'TabsPage';

  private pages: Array<{title: string, page: string}>;

  private ngOnInit() {
    this.pages = [
      { title: '个人详情', page: 'PersonInfoPage' },
      { title: '密码修改', page: 'ChangePwdPage' }
    ];
  }

  private openPage(page) {
    this.navCtrl.push(page.page);
  }

  private loginOut() {
    this.userData.clearLoginData();
    this.navCtrl.setRoot('LoginPage');
  }
  private showConfirm() {
    console.log('--退出-');
    let confirm = this.alertCtrl.create({
      title: '确认退出?',
      message: '你是否确认退出登录?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确认',
          handler: () => {
            console.log('Agree clicked');
            this.loginOut();
          }
        }
      ]
    });
    confirm.present();
  }

}
