import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ContactPage } from './contact';

@NgModule({
    imports: [
        IonicPageModule.forChild(ContactPage)
    ],
    declarations: [ContactPage],
    entryComponents: [ContactPage]
})
export class ContactPageModule { }
