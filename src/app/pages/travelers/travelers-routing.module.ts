import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelersPage } from './travelers.page';

const routes: Routes = [
  {
    path: '',
    component: TravelersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelersPageRoutingModule {}
