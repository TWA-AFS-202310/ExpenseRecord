import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { RecordCreationComponent } from './record-creation/record-creation.component';
import { RecordListComponent } from './record-list/record-list.component';
import { NewRecordComponent } from './record-list/new-record/new-record.component';
import { RecordDisplayComponent } from './record-list/record-display/record-display.component';
@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        RecordCreationComponent,
        RecordListComponent,
        NewRecordComponent,
        RecordDisplayComponent
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
