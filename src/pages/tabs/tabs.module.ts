import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';

@NgModule({
    imports: [
        IonicPageModule.forChild(TabsPage)
    ],
    declarations: [TabsPage],
    entryComponents: [TabsPage]
})
export class TabsPageModule { }
