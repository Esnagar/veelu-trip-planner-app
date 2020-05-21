import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'trips',
        loadChildren: () => import('../trips/trips.module').then( m => m.TripsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifs/notifs.module').then( m => m.NotifsPageModule)
      },
      {
        path: 'user',
        loadChildren: () => import('../user/user.module').then( m => m.UserPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/trips',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
