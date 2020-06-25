import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifsPageRoutingModule } from './notifs-routing.module';

import { NotifsPage } from './notifs.page';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifsPageRoutingModule
  ],
  declarations: [NotifsPage, ArrowBackComponent, PageTitleComponent]
})
export class NotifsPageModule {}
