import { BaseComponent } from './../../../components/base/base';
import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rectification-detail',
  templateUrl: 'rectification-detail.html',
})
export class RectificationDetailPage extends BaseComponent {

  private mDetailInfo: any;      // 详情信息

  private mAudit: any;

  private isHaveAudit: boolean = false;

  ngOnInit() {
    this.mDetailInfo = this.navParams.get('info');
    if (this.mDetailInfo.status === '合格' || this.mDetailInfo.status === '不合格') {
      this.isHaveAudit = true;
      this.httpService.getApprovalList(this.mDetailInfo.id).subscribe(
        res => {
          if (!this.isBlank(res) &&
            res.result === 'success' &&
            res.totalOfReviewAndApproval > 0) {
            this.mAudit = res.reviewAndApprovalList;
          }
        }
      );
    }

  }

}
