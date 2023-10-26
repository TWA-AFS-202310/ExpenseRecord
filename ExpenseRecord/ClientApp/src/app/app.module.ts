import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
// import {GreetingComponent} from "./greeting/greeting.component";
import { ExpenseComponent } from './expense/expense.component';
// import { ExpenseListComponent } from './expense-list/expense-list.component';
// import { ExpenseFormComponent } from './expense-form/expense-form.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        // GreetingComponent,
        ExpenseComponent,
        // ExpenseListComponent,
        // ExpenseFormComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
