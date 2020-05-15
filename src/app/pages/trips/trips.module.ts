import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsPageRoutingModule } from './trips-routing.module';

import { TripsPage } from './trips.page';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsPageRoutingModule,
  ],
  entryComponents: [SearchBarComponent],
  declarations: [TripsPage, SearchBarComponent]
})
export class TripsPageModule {}
