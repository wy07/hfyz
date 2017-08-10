import { WaybillCardComponent } from './waybill-card/waybill-card';
import { SearchCompanyComponent } from './search-company/search-company';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BaseComponent } from './base/base';
import { RectificationCardComponent } from './rectification-card/rectification-card';

@NgModule({
    imports: [IonicModule],
    exports: [
        BaseComponent,
        RectificationCardComponent,
        SearchCompanyComponent,
        WaybillCardComponent
    ],
    declarations: [
        BaseComponent,
        RectificationCardComponent,
        SearchCompanyComponent,
        WaybillCardComponent
    ],
    entryComponents: [
        BaseComponent,
        RectificationCardComponent,
        SearchCompanyComponent,
        WaybillCardComponent
    ]
})
export class ComponentsModule { }
