import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotifsPageRoutingModule } from './notifs-routing.module';
import { NotifsPage } from './notifs.page';
let NotifsPageModule = class NotifsPageModule {
};
NotifsPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            NotifsPageRoutingModule
        ],
        declarations: [NotifsPage]
    })
], NotifsPageModule);
export { NotifsPageModule };
//# sourceMappingURL=notifs.module.js.map