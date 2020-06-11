import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage, ArrowBackComponent, PageTitleComponent]
})
export class SettingsPageModule {}
