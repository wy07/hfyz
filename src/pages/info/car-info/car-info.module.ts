/**
 * Created by wy on 2017/8/21.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import {CarInfoPage} from "./car-info";

@NgModule({
  imports: [
    IonicPageModule.forChild(CarInfoPage)
  ],
  declarations: [CarInfoPage],
  entryComponents: [CarInfoPage]
})
export class CarInfoPageModule { }
