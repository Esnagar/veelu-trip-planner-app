import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryDetailPageRoutingModule } from './entry-detail-routing.module';

import { EntryDetailPage } from './entry-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [EntryDetailPage]
})
export class EntryDetailPageModule {}
