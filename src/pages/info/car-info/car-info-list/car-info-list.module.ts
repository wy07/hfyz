/**
 * Created by wy on 2017/8/22.
 * 车辆列表
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {CarInfoListPage} from "./car-info-list";


@NgModule({
  imports: [
    IonicPageModule.forChild(CarInfoListPage)
  ],
  declarations: [CarInfoListPage],
  entryComponents: [CarInfoListPage]
})
export class CarInfoListPageModule { }
