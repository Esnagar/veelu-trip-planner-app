import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripsPageRoutingModule } from './trips-routing.module';

import { TripsPage } from './trips.page';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { CreateButtonComponent } from 'src/app/components/create-button/create-button.component';
import { FiltersComponent } from 'src/app/components/filters/filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripsPageRoutingModule,
  ],
  entryComponents: [SearchBarComponent, PageTitleComponent, FiltersComponent],
  declarations: [TripsPage, SearchBarComponent, PageTitleComponent, CreateButtonComponent, FiltersComponent]
})
export class TripsPageModule {}
