import { SearchCompanyComponent } from './search-company/search-company';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { BaseComponent } from './base/base';
import { RectificationCardComponent } from './rectification-card/rectification-card';

@NgModule({
    imports: [IonicModule],
    exports: [BaseComponent, RectificationCardComponent, SearchCompanyComponent],
    declarations: [BaseComponent, RectificationCardComponent, SearchCompanyComponent],
    entryComponents: [BaseComponent, RectificationCardComponent, SearchCompanyComponent]
})
export class ComponentsModule { }
