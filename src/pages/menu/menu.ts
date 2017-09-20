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
    this.navCtrl.push('LoginPage');
  }

}
