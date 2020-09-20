import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifsPageRoutingModule } from './notifs-routing.module';

import { NotifsPage } from './notifs.page';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifsPageRoutingModule,
    SharedModule
  ],
  declarations: [NotifsPage]
})
export class NotifsPageModule {}
