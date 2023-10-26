import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRecordRoutingModule } from './expense-record-routing.module';
import { ExpenseRecordComponent } from './expense-record.component';
import { ConvertEnumToStringPipe, RecordTableComponent } from './record-table/record-table.component';
import { RecordCreateComponent } from './record-create/record-create.component';


@NgModule({
  declarations: [
    ExpenseRecordComponent,
    RecordTableComponent,
    ConvertEnumToStringPipe,
    RecordCreateComponent
    
  ],
  imports: [
    CommonModule,
    ExpenseRecordRoutingModule
  ]
})
export class ExpenseRecordModule { }
