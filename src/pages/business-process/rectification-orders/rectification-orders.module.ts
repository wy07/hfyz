import { ComponentsModule } from './../../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RectificationOrdersPage } from './rectification-orders';

@NgModule({
    imports: [
        ComponentsModule,
        IonicPageModule.forChild(RectificationOrdersPage)
    ],
    declarations: [RectificationOrdersPage],
    entryComponents: [RectificationOrdersPage]
})
export class RectificationOrdersPageModule { }
