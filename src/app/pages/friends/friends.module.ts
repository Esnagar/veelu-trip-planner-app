import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendsPageRoutingModule } from './friends-routing.module';

import { FriendsPage } from './friends.page';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { CreateButtonComponent } from 'src/app/components/create-button/create-button.component';
import { UserRowComponent } from 'src/app/components/user-row/user-row.component';
import { SmallButtonComponent } from 'src/app/components/small-button/small-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendsPageRoutingModule
  ],
  declarations: [FriendsPage, PageTitleComponent, ArrowBackComponent, CreateButtonComponent, UserRowComponent, SmallButtonComponent]
})
export class FriendsPageModule {}
