import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TripsPage } from './trips.page';
const routes = [
    {
        path: '',
        component: TripsPage
    }
];
let TripsPageRoutingModule = class TripsPageRoutingModule {
};
TripsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TripsPageRoutingModule);
export { TripsPageRoutingModule };
//# sourceMappingURL=trips-routing.module.js.map