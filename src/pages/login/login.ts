import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FormGroup, Validators } from '@angular/forms';

import { BaseComponent } from './../../components/base/base';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'LoginPage',
  segment: 'some-path'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseComponent {

  loginForm: FormGroup;
  id = 1;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      /*phone: ['', Validators.compose([Validators.pattern('(1[3,4,5,7,8]\\d{9})'), Validators.required])],*/
      username: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    try {
      let res = await this.httpService.login(this.loginForm.value.username, this.loginForm.value.password);
      if (res.result === 'success') {
        this.userData.setToken(res.token);
        this.userData.setUserName(res.sub);
        this.navCtrl.setRoot('TabsPage');
        this.showToast('欢迎 ' + this.userData.getUserName() + '！', 3000, this.SHOW_TOP);
        // console.log(res);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
      this.showToast('您的用户名和密码不匹配，请重新输入！', 3000, this.SHOW_TOP);
    }
  }

  goToTabsPage() {
    // this.backgroundMode.enable();
    // console.log("isEnabled--->" + this.backgroundMode.isEnabled());
    // console.log("isActive--->" + this.backgroundMode.isActive());
    // this.backgroundMode.setDefaults({
    //   title: 'String',
    //   text: 'String',
    // });
    // setInterval(() => {
    //   this.localNotifications.schedule({
    //     id: this.id,
    //     title: '测试消息推送'+this.id,
    //     text: '测试内容测试内容测试内容测试内容测试内容',
    //     icon: 'assets/img/avatar_1.png',
    //     data: {type: 'test'}
    //   });
    //   this.id ++;
    // }, 3000);
    // this.localNotifications.on('click', notification => {
    //   console.log("======click======");
    //   console.log("click ---> " + JSON.stringify(notification));
    // });
    if (this.loginForm.valid) {
      this.login();
    }
  }
}
