import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelersPageRoutingModule } from './travelers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TravelersPage } from './travelers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelersPageRoutingModule,
    SharedModule
  ],
  declarations: [TravelersPage]
})
export class TravelersPageModule {}
