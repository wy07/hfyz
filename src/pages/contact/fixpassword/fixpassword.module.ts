import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FixPasswordPage} from "./fixpassword";

@NgModule({
  imports: [
    IonicPageModule.forChild(FixPasswordPage)
  ],
  declarations: [FixPasswordPage],
  entryComponents: [FixPasswordPage]
})
export class FixPsdPageModule {
}
