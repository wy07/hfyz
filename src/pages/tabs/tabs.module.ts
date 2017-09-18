import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';
import {DirectivesModule} from "../../directives/directives.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(TabsPage),
        DirectivesModule
    ],
    declarations: [TabsPage],
    entryComponents: [TabsPage]
})
export class TabsPageModule { }
