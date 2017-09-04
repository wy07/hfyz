import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {BaseComponent} from "../../../components/base/base";
import {FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'changPwd.html'
})
export class ChangePwdPage extends BaseComponent {
  changePwdForm: FormGroup;

  ngOnInit() {
    this.changePwdForm = this.formBuilder.group({
      old_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      new_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])],
      confirm_pwd: ['', Validators.compose([Validators.minLength(5), Validators.required])]
    });
  }

  /**
   * 输入判断
   * @returns {boolean}
   */
  private validation() {
    if (this.isBlank(this.changePwdForm.value.old_pwd)) {
      this.showToast('请输入旧密码！', 3000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.isBlank(this.changePwdForm.value.new_pwd)) {
      this.showToast('请输入新密码！', 3000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.changePwdForm.value.old_pwd === this.changePwdForm.value.new_pwd) {
      this.showToast('新密码不能与旧密码一致！', 3000, this.SHOW_BOTTOM);
      return false;
    }
    if (!this.isStrong(this.changePwdForm.value.new_pwd)) {
      this.showToast('新密码必须只包含数字和字母,并且长度大于6位！', 3000, this.SHOW_BOTTOM);
      return false;
    }
    if (this.changePwdForm.value.new_pwd !== this.changePwdForm.value.confirm_pwd) {
      this.showToast('两次输入的新密码不一致！', 3000, this.SHOW_BOTTOM);
      return false;
    }
    return true;
  }

  async confirmChangePwd() {
    if (this.validation()) {
      let result = await this.httpService.changePwd(this.changePwdForm.value.old_pwd, this.changePwdForm.value.new_pwd);
      console.log(result);
      this.showToast('修改密码已成功，请注意保存新密码！', 2500, this.SHOW_TOP);
      this.navCtrl.pop();
    }
  }
}
