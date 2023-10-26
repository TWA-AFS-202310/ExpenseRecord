import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRecordRoutingModule } from './expense-record-routing.module';
import { ExpenseRecordComponent } from './expense-record.component';
import { RecordTableComponent } from './record-table/record-table.component';


@NgModule({
  declarations: [
    ExpenseRecordComponent,
    RecordTableComponent
  ],
  imports: [
    CommonModule,
    ExpenseRecordRoutingModule
  ]
})
export class ExpenseRecordModule { }
