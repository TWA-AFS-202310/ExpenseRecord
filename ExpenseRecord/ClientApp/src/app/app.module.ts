import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { RecordTableComponent } from './expense-record/record-table/record-table.component';
import { AppRoutingModule } from './app-routing.module';
import { ExpenseRecordModule } from './expense-record/expense-record.module';


@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        RecordTableComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
