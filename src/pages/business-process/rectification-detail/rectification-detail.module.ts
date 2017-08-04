import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RectificationDetailPage } from './rectification-detail';

@NgModule({
    imports: [
        IonicPageModule.forChild(RectificationDetailPage)
    ],
    declarations: [RectificationDetailPage],
    entryComponents: [RectificationDetailPage]
})
export class RectificationDetailPageModule { }
