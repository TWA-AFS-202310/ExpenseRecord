import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseService } from './expense/expense.service';
import "@angular/compiler";
import { ChildComponent } from './expense/child/child.component';
import { ExpenseModule } from './expense/expense.module';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        ExpenseComponent,
    
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ExpenseModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
