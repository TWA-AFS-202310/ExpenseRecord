import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ResponseListComponent } from './response-list/response-list.component';
import { ResponseComponent } from './response-list/response/response.component';
import { BottomPanelComponent } from './bottom-panel/bottom-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        GreetingComponent,
        ResponseListComponent,
        ResponseComponent,
        BottomPanelComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
