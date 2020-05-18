import { __decorate } from "tslib";
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPage } from './tabs.page';
import { RouterModule } from '@angular/router';
import { IconsModule } from 'src/app/icons/icons.module';
const routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'trips',
                loadChildren: () => import('../trips/trips.module').then(m => m.TripsPageModule)
            },
            {
                path: 'notifications',
                loadChildren: () => import('../notifs/notifs.module').then(m => m.NotifsPageModule)
            },
            {
                path: 'user',
                loadChildren: () => import('../user/user.module').then(m => m.UserPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/trips',
        pathMatch: 'full'
    }
];
let TabsPageModule = class TabsPageModule {
};
TabsPageModule = __decorate([
    NgModule({
        imports: [
            IonicModule,
            CommonModule,
            FormsModule,
            IconsModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TabsPage]
    })
], TabsPageModule);
export { TabsPageModule };
//# sourceMappingURL=tabs.module.js.map