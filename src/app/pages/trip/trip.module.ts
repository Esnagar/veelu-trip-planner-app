import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripPageRoutingModule } from './trip-routing.module';

import { TripPage } from './trip.page';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { LabelComponent } from 'src/app/components/label/label.component';
import { MainButtonComponent } from 'src/app/components/main-button/main-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPageRoutingModule
  ],
  declarations: [TripPage, ArrowBackComponent, PageTitleComponent, LabelComponent, MainButtonComponent]
})
export class TripPageModule {}
