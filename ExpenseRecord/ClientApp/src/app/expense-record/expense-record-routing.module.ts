import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordTableComponent } from './record-table/record-table.component';

const routes: Routes = [
  { path: '', component: RecordTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRecordRoutingModule { }
