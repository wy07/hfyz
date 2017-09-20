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
      username: ['admin', Validators.compose([Validators.minLength(5), Validators.required])],
      password: ['admin123', Validators.compose([Validators.minLength(5), Validators.required])]
    });
    // 调试阶段直接登陆即可
    /*this.login();*/
  }

  ionViewDidLoad() {
    /*console.log('ionViewDidLoad LoginPage');*/
  }

  async login() {
    try {
      let res = await this.httpService.login(this.loginForm.value.username, this.loginForm.value.password);
      if (res.result === 'success') {
        this.userData.setToken(res.token);
        this.userData.setUserName(res.sub);
        this.userData.setPermission(res.rights);
        // console.log('permission---'+this.userData.getPermission());
        this.userData.setRole(res.role);
        this.userData.setUserId(res.id);
        this.userData.setCompanyCode(res.companyCode);
        this.userData.setCompanyName(res.companyName);
        /*this.navCtrl.setRoot('TabsPage');*/
        this.navCtrl.setRoot('MenuPage');
        this.showToast('欢迎 ' + this.userData.getUserName() + '！', 1500, this.SHOW_TOP);
      } else {
        this.showToast('登录信息不正确，请重新输入！', 1500, this.SHOW_BOTTOM);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
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
