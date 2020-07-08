import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelersPageRoutingModule } from './travelers-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { TravelersPage } from './travelers.page';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { UserRowComponent } from 'src/app/components/user-row/user-row.component';
import { RadioButtonComponent } from 'src/app/components/radio-button/radio-button.component';
import { CreateButtonComponent } from 'src/app/components/create-button/create-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelersPageRoutingModule,
    SharedModule
  ],
  declarations: [TravelersPage, SearchBarComponent, UserRowComponent, RadioButtonComponent, CreateButtonComponent]
})
export class TravelersPageModule {}
