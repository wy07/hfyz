/**
 * Created by wy on 2017/8/22.
 * 车辆详情
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {CarInfoDetailPage} from "./car-info-detail";

@NgModule({
  imports: [
    IonicPageModule.forChild(CarInfoDetailPage)
  ],
  declarations: [CarInfoDetailPage],
  entryComponents: [CarInfoDetailPage]
})
export class CarInfoDetailPageModule { }
