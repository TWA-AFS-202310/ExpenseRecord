import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecordTableComponent } from './expense-record/record-table/record-table.component';
import { ExpenseRecordComponent } from './expense-record/expense-record.component';


const routes: Routes = [
 

  { path: '', redirectTo:'/table', pathMatch: 'full'},
  { path: 'table', component: ExpenseRecordComponent,
  children: [
   {
     path: '', 
     component: RecordTableComponent,
   }
 ],
 },
 
 ];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 
