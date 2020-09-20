import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTripPageRoutingModule } from './edit-trip-routing.module';

import { EditTripPage } from './edit-trip.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTripPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule,
    SharedModule
  ],
  declarations: [EditTripPage]
})
export class EditTripPageModule {}
