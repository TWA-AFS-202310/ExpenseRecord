import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { CreaterecordComponent } from './createrecord/createrecord.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RecorddetailComponent } from './recorddetail/recorddetail.component';
import { SearchComponent } from './search/search.component';
import { RecordsComponent } from './records/records.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        CreaterecordComponent,
        HomepageComponent,
        SearchComponent,
        RecordsComponent,
        RecorddetailComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'createrecord', component:CreaterecordComponent},
      {path:'homepage', component:HomepageComponent},
      {path:'',redirectTo:'homepage', pathMatch:'full'},
      {path:'detail/:id', component:RecorddetailComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
