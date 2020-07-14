import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseDetailPageRoutingModule } from './expense-detail-routing.module';

import { ExpenseDetailPage } from './expense-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRowComponent } from 'src/app/components/user-row/user-row.component';
import { RadioButtonComponent } from 'src/app/components/radio-button/radio-button.component';
import { SmallButtonComponent } from 'src/app/components/small-button/small-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [ExpenseDetailPage, UserRowComponent, RadioButtonComponent, SmallButtonComponent]
})
export class ExpenseDetailPageModule {}
