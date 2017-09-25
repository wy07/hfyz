import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rectification-confirm',
  templateUrl: 'rectification-confirm.html',
})
export class RectificationConfirmPage extends BaseComponent {

  private mConfirm: any = this.navParams.get('info');

  private mOpinion: string = 'true';

  private submitEdit() {
    this.httpService.confirmRectification(this.mConfirm.id, this.mOpinion).subscribe(
      res => {
        if (res.result === 'success') {
          this.showToast('数据确认成功！', 1000, this.SHOW_TOP);
          /*this.navCtrl.push('RectificationPage');*/
          this.viewCtrl.dismiss();
        } else {
          this.showToast('数据确认失败，请重试！', 1000, this.SHOW_BOTTOM);
        }
      }
    );
  }

  private backPage() {
    this.viewCtrl.dismiss();
  }

}
