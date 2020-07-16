import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ArrowBackComponent } from '../components/arrow-back/arrow-back.component';
import { PageTitleComponent } from '../components/page-title/page-title.component';
import { LabelComponent } from '../components/label/label.component';
import { MainButtonComponent } from '../components/main-button/main-button.component';
import { ButtonsMoreComponent } from '../components/buttons-more/buttons-more.component';
import { UserRowComponent } from '../components/user-row/user-row.component';
import { CreateButtonComponent } from '../components/create-button/create-button.component';
import { FiltersComponent } from '../components/filters/filters.component';
import { InputFormComponent } from '../components/input-form/input-form.component';
import { PopoverComponent } from '../components/popover/popover.component';
import { PrivacyButtonComponent } from '../components/privacy-button/privacy-button.component';
import { RadioButtonComponent } from '../components/radio-button/radio-button.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { SmallButtonComponent } from '../components/small-button/small-button.component';
import { TripThumbnailComponent } from '../components/trip-thumbnail/trip-thumbnail.component';
import { UploadCoverComponent } from '../components/upload-cover/upload-cover.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    IonicModule
  ],
  declarations: [ArrowBackComponent, PageTitleComponent, LabelComponent, MainButtonComponent, ButtonsMoreComponent, CreateButtonComponent,
                UserRowComponent, FiltersComponent, InputFormComponent, PopoverComponent, PrivacyButtonComponent, RadioButtonComponent,
                SearchBarComponent, SmallButtonComponent, TripThumbnailComponent, UploadCoverComponent],
  exports: [CommonModule, ArrowBackComponent, PageTitleComponent, LabelComponent, MainButtonComponent, ButtonsMoreComponent, CreateButtonComponent,
          UserRowComponent, FiltersComponent, InputFormComponent, PopoverComponent, PrivacyButtonComponent, RadioButtonComponent,
          SearchBarComponent, SmallButtonComponent, TripThumbnailComponent, UploadCoverComponent]
})
export class SharedModule { }
