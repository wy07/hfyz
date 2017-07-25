import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BaseComponent } from './base/base';

@NgModule({
    imports: [IonicModule],
    exports: [BaseComponent],
    declarations: [BaseComponent],
    entryComponents: [BaseComponent]
})
export class ComponentsModule { }
