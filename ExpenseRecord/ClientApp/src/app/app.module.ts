import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ExpenseCreationComponent } from './expense-creation/expense-creation.component';
import { ExpenseDisplayComponent } from './expense-display/expense-display.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        ExpenseCreationComponent,
        ExpenseDisplayComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatNativeDateModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
