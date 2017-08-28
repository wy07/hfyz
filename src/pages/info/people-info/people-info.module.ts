/**
 * Created by wy on 2017/8/21.
 * 从业人员列表
 */
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

import {PeopleInfoPage} from "./people-info";

@NgModule({
  imports: [
    IonicPageModule.forChild(PeopleInfoPage)
  ],
  declarations: [PeopleInfoPage],
  entryComponents: [PeopleInfoPage]
})
export class PeopleInfoPageModule {
}
