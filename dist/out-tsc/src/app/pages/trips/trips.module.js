import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TripsPageRoutingModule } from './trips-routing.module';
import { TripsPage } from './trips.page';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
let TripsPageModule = class TripsPageModule {
};
TripsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            TripsPageRoutingModule,
        ],
        entryComponents: [SearchBarComponent, PageTitleComponent],
        declarations: [TripsPage, SearchBarComponent, PageTitleComponent]
    })
], TripsPageModule);
export { TripsPageModule };
//# sourceMappingURL=trips.module.js.map