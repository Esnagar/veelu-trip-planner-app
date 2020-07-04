import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTripPageRoutingModule } from './edit-trip-routing.module';

import { EditTripPage } from './edit-trip.page';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { MainButtonComponent } from 'src/app/components/main-button/main-button.component';
import { UploadCoverComponent } from 'src/app/components/upload-cover/upload-cover.component';
import { LabelComponent } from 'src/app/components/label/label.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTripPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations: [EditTripPage, ArrowBackComponent, PageTitleComponent, MainButtonComponent, UploadCoverComponent, LabelComponent]
})
export class EditTripPageModule {}
