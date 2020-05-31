import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTripPageRoutingModule } from './create-trip-routing.module';

import { CreateTripPage } from './create-trip.page';
import { InputFormComponent } from 'src/app/components/input-form/input-form.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { LabelComponent } from 'src/app/components/label/label.component';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { UploadCoverComponent } from 'src/app/components/upload-cover/upload-cover.component';
import { MainButtonComponent } from 'src/app/components/main-button/main-button.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTripPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations: [CreateTripPage, InputFormComponent, PageTitleComponent, LabelComponent, 
                ArrowBackComponent, UploadCoverComponent, MainButtonComponent]
})
export class CreateTripPageModule {}
