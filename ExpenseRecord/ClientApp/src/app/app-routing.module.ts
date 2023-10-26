import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseRecordListComponent } from './expense-record-list/expense-record-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '', component: ExpenseRecordListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
