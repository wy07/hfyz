import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TransportOrdersPage } from './transport-orders';

@NgModule({
    imports: [
        IonicPageModule.forChild(TransportOrdersPage)
    ],
    declarations: [TransportOrdersPage],
    entryComponents: [TransportOrdersPage]
})
export class TransportOrdersPageModule { }
