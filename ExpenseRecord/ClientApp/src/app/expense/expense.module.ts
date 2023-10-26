import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ExpenseComponent } from './expense.component';

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
    { path:'',component:ExpenseComponent},
    { path:'new',component: ChildComponent}]
    )
  ]
})
export class ExpenseModule { }