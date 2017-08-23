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
      old_pwd: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      new_pwd: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirm_pwd: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }
  async confirmFixPwd() {
    try {
      let confirm = await this.httpService.confirmOldPwd(this.fixPwdForm.value.old_pwd);
      if (confirm.result === "FAIL") {
        let toast = this.toastCtrl.create({
          message: '原始密码错误，请重新输入',
          duration: 3000,
          position: "top"
        });
        toast.present(toast);
      }
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    if (this.fixPwdForm.value.new_pwd !== this.fixPwdForm.value.confirm_pwd) {
      let toast = this.toastCtrl.create({
        message: '确认密码与新密码不一致，请重新输入！',
        duration: 3000,
        position: "top"
      });
      toast.present(toast);
    } else {
      let fix = await this.httpService.fixNewPwd(this.fixPwdForm.value.new_pwd);
      if (fix.result === "FAIL") {
        let toast = this.toastCtrl.create({
          message: '修改密码失败',
          duration: 2500,
          position: "top"
        });
        toast.present(toast);
        return;
      } else {
        let toast = this.toastCtrl.create({
          message: '修改密码已成功，请注意保存新密码！',
          duration: 2500,
          position: "top"
        });
        toast.present(toast);
        this.navCtrl.pop();
      }
    }
  }
}
