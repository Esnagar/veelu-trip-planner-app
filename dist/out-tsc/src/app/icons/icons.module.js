import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Home, Bell, User } from 'angular-feather/icons';
const icons = {
    Home,
    Bell,
    User
};
let IconsModule = class IconsModule {
};
IconsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FeatherModule.pick(icons)
        ],
        exports: [
            FeatherModule
        ]
    })
], IconsModule);
export { IconsModule };
//# sourceMappingURL=icons.module.js.map