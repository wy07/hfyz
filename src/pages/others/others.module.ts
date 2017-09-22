import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {OthersPage} from "./others";


@NgModule({
  imports: [
    IonicPageModule.forChild(OthersPage)
  ],
  declarations: [OthersPage],
  entryComponents: [OthersPage]
})
export class OthersPageModule { }
