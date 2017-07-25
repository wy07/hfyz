import { LoginPage } from './login';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    imports: [
        IonicPageModule.forChild(LoginPage)
    ],
    declarations: [LoginPage],
    entryComponents: [LoginPage]
})

export class LoginPageModule { }
