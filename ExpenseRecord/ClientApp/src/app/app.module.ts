import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ExpenseRecordListComponent } from './expense-record-list/expense-record-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule } from '@angular/material/dialog';
import {MatTableModule } from '@angular/material/table';
import {MatSortModule } from '@angular/material/sort';


@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        ExpenseRecordListComponent,
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
