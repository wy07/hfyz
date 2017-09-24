import { Rectification } from './../../../models/rectification.model';
import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rectification-feedback',
  templateUrl: 'rectification-feedback.html',
})
export class RectificationFeedbackPage extends BaseComponent {

  private mFeedback: any = this.navParams.get('info');

  private mCurrentDate: string;

  private mFeedbackDesc: string = '无';

  ngOnInit() {
    this.mCurrentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  private submitEdit() {
    let curTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
    this.httpService.commitRectificationFeedback(this.mFeedback.id, curTime, this.mFeedbackDesc).subscribe(
      res => {
        if (res.result === 'success') {
          this.showToast('反馈数据提交成功！', 1000, this.SHOW_TOP);
          /*this.navCtrl.push('RectificationPage');*/
          this.viewCtrl.dismiss();
        } else {
          this.showToast('反馈数据提交失败，请重试！', 1000, this.SHOW_BOTTOM);
        }
      }
    );
  }

  private backPage() {
    this.viewCtrl.dismiss();
  }

}
