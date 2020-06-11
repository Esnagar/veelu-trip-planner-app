import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserPageRoutingModule } from './user-routing.module';

import { UserPage } from './user.page';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule
  ],
  declarations: [UserPage, ArrowBackComponent, PageTitleComponent]
})
export class UserPageModule {}
