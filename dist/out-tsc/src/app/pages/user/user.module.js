import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPageRoutingModule } from './user-routing.module';
import { UserPage } from './user.page';
let UserPageModule = class UserPageModule {
};
UserPageModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            UserPageRoutingModule
        ],
        declarations: [UserPage]
    })
], UserPageModule);
export { UserPageModule };
//# sourceMappingURL=user.module.js.map