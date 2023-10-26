import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { RecordsListComponent } from './components/recotds-list/recotds-list.component';
import { RecordNewComponent } from './components/record-new/record-new.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        RecordsListComponent,
        RecordNewComponent,
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
