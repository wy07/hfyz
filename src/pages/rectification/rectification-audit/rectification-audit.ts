import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rectification-audit',
  templateUrl: 'rectification-audit.html',
})
export class RectificationAuditPage extends BaseComponent {

  private mAudit: any = this.navParams.get('info');

  private mCurrentDate: string;

  private mApproveDesc: string = '无';

  private mOpinion: string = 'true';

  ngOnInit() {
    this.mCurrentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  private submitEdit() {
    let curTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm');
    this.httpService.commitRectificationApproval(this.mAudit.id, curTime,
      this.mApproveDesc, this.mOpinion).subscribe(
      res => {
        if (res.result === 'success') {
          this.showToast('审核数据提交成功！', 1500, this.SHOW_TOP);
          /*this.navCtrl.push('RectificationPage');*/
          this.viewCtrl.dismiss();
        } else {
          this.showToast('审核数据提交失败，请重试！', 1500, this.SHOW_BOTTOM);
        }
      }
    );
  }

  private backPage() {
    this.viewCtrl.dismiss();
  }

}
