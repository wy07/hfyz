import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";
import {FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'fixpassword.html'
})
export class FixPasswordPage extends BaseComponent {
  fixPwdForm:FormGroup;
  ngOnInit() {
    this.fixPwdForm = this.formBuilder.group({
      old_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      new_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      confirm_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
  }
  async confirmFixPwd() {
    try {
      let confirm = await this.httpService.confirmOldPwd(this.fixPwdForm.value.old_pwd);
      if (confirm.result === "FAIL") {
        this.showToast('原始密码错误，请重新输入！', 3000, 'top');
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    if (this.fixPwdForm.value.new_pwd !== this.fixPwdForm.value.confirm_pwd) {
      this.showToast('确认密码与新密码不一致，请重新输入！', 3000, 'top');
    } else {
      let fix = await this.httpService.fixNewPwd(this.fixPwdForm.value.new_pwd);
      if (fix.result === "FAIL") {
        this.showToast('修改密码失败！', 2500, 'top');
        return;
      } else {
        this.showToast('修改密码已成功，请注意保存新密码！', 2500, 'top');
        this.navCtrl.pop();
      }
    }
  }
}
