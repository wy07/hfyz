import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InfoListPage } from './info-list';

@NgModule({
    imports: [
        IonicPageModule.forChild(InfoListPage)
    ],
    declarations: [InfoListPage],
    entryComponents: [InfoListPage]
})
export class InfoListPageModule { }
