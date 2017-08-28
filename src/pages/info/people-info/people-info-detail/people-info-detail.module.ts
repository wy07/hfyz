/**
 * Created by wy on 2017/8/23.
 * 从业人员详细信息
 */
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PeopleInfoDetailPage} from "./people-info-detail";

@NgModule({
  imports: [
    IonicPageModule.forChild(PeopleInfoDetailPage)
  ],
  declarations: [PeopleInfoDetailPage],
  entryComponents: [PeopleInfoDetailPage]
})
export class PeopleInfoDetailPageModule {
}

