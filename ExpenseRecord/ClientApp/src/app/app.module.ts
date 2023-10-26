import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CategoryEmojiPipe } from './pipes/category-emoji.pipe';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import {GreetingComponent} from "./greeting/greeting.component";
import { ComponentsComponent } from './components/components.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { HistoryComponent } from './pages/history/history.component';
import { TaskCreationComponent } from './pages/task-creation/task-creation.component';
import { TaskDeletionComponent } from './pages/task-deletion/task-deletion.component';
import { TaskModificationComponent } from './pages/task-modification/task-modification.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GreetingComponent,
        ComponentsComponent,
        PagesComponent,
        HeaderComponent,
        NavbarComponent,
        HomeComponent,
        FilterComponent,
        TaskFormComponent,
        HistoryComponent,
        TaskCreationComponent,
        TaskDeletionComponent,
        TaskModificationComponent,
        CategoryEmojiPipe
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
