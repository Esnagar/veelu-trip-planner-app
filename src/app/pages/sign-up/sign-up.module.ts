import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';

import { SignUpPage } from './sign-up.page';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { MainButtonComponent } from 'src/app/components/main-button/main-button.component';
import { LabelComponent } from 'src/app/components/label/label.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  declarations: [SignUpPage, ArrowBackComponent, PageTitleComponent, MainButtonComponent, LabelComponent]
})
export class SignUpPageModule {}
