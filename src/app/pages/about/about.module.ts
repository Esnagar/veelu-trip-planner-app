import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPageRoutingModule } from './about-routing.module';

import { AboutPage } from './about.page';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [AboutPage, ArrowBackComponent, PageTitleComponent]
})
export class AboutPageModule {}
