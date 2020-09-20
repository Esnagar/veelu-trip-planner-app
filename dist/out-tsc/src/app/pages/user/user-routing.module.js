import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserPage } from './user.page';
const routes = [
    {
        path: '',
        component: UserPage
    }
];
let UserPageRoutingModule = class UserPageRoutingModule {
};
UserPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], UserPageRoutingModule);
export { UserPageRoutingModule };
//# sourceMappingURL=user-routing.module.js.map