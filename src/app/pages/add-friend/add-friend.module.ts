import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFriendPageRoutingModule } from './add-friend-routing.module';

import { AddFriendPage } from './add-friend.page';
import { ArrowBackComponent } from 'src/app/components/arrow-back/arrow-back.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { UserRowComponent } from 'src/app/components/user-row/user-row.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFriendPageRoutingModule
  ],
  declarations: [AddFriendPage, ArrowBackComponent, PageTitleComponent, SearchBarComponent, UserRowComponent]
})
export class AddFriendPageModule {}
