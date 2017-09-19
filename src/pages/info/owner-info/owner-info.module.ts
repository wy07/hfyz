/**
 * Created by wy on 2017/9/19.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {OwnerInfoPage} from "./owner-info";


@NgModule({
  imports: [
    IonicPageModule.forChild(OwnerInfoPage)
  ],
  declarations: [OwnerInfoPage],
  entryComponents: [OwnerInfoPage]
})
export class OwnerInfoPageModule { }
