import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ChangePwdPage} from "./changePwd";


@NgModule({
  imports: [
    IonicPageModule.forChild(ChangePwdPage)
  ],
  declarations: [ChangePwdPage],
  entryComponents: [ChangePwdPage]
})
export class ChangePwdModule {
}
