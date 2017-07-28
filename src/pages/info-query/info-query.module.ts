import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InfoQueryPage } from './info-query';

@NgModule({
    imports: [
        IonicPageModule.forChild(InfoQueryPage)
    ],
    declarations: [InfoQueryPage],
    entryComponents: [InfoQueryPage]
})
export class InfoQueryPageModule { }
