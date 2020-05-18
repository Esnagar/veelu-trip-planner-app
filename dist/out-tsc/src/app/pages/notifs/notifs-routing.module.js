import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotifsPage } from './notifs.page';
const routes = [
    {
        path: '',
        component: NotifsPage
    }
];
let NotifsPageRoutingModule = class NotifsPageRoutingModule {
};
NotifsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], NotifsPageRoutingModule);
export { NotifsPageRoutingModule };
//# sourceMappingURL=notifs-routing.module.js.map