import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensesPageRoutingModule } from './expenses-routing.module';

import { ExpensesPage } from './expenses.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivacyButtonComponent } from 'src/app/components/privacy-button/privacy-button.component';
import { RadioButtonComponent } from 'src/app/components/radio-button/radio-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensesPageRoutingModule,
    SharedModule
  ],
  declarations: [ExpensesPage, PrivacyButtonComponent, RadioButtonComponent]
})
export class ExpensesPageModule {}
