import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { NetworkControlPage } from './network-control';

@NgModule({
    imports: [
        IonicPageModule.forChild(NetworkControlPage)
    ],
    declarations: [NetworkControlPage],
    entryComponents: [NetworkControlPage]
})
export class NetworkControlPageModule { }
