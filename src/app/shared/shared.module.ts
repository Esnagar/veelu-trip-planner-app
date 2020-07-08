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


@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [ArrowBackComponent, PageTitleComponent, LabelComponent, MainButtonComponent, ButtonsMoreComponent, CreateButtonComponent],
  exports: [CommonModule, ArrowBackComponent, PageTitleComponent, LabelComponent, MainButtonComponent, ButtonsMoreComponent, CreateButtonComponent]
})
export class SharedModule { }
