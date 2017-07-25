import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './about';

@NgModule({
    imports: [
        IonicPageModule.forChild(AboutPage)
    ],
    declarations: [AboutPage],
    entryComponents: [AboutPage]
})
export class AboutPageModule { }
