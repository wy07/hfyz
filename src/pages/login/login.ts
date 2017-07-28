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

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseComponent {

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.compose([Validators.pattern('(1[3,4,5,7,8]\\d{9})'), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login() {
    try {
      let res = await this.httpService.login(this.loginForm.value.phone, this.loginForm.value.password);
      this.userData.setToken(res.token);
      this.navCtrl.setRoot('TabsPage');
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  goToTabsPage() {
    if (this.loginForm.valid) {
      this.login();
    }
  }
}
