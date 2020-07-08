import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChecklistPageRoutingModule } from './checklist-routing.module';

import { ChecklistPage } from './checklist.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivacyButtonComponent } from 'src/app/components/privacy-button/privacy-button.component';
import { RadioButtonComponent } from 'src/app/components/radio-button/radio-button.component';
import { ButtonsMoreComponent } from 'src/app/components/buttons-more/buttons-more.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistPageRoutingModule,
    SharedModule
  ],
  declarations: [ChecklistPage, PrivacyButtonComponent, RadioButtonComponent, ButtonsMoreComponent]
})
export class ChecklistPageModule {}
