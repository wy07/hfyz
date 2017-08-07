import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RectificationPage } from './rectification';

@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationPage)
    ],
    declarations: [RectificationPage],
    entryComponents: [RectificationPage]
})
export class RectificationPageModule { }
