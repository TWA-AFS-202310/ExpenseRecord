import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { TaskCreationComponent } from './pages/task-creation/task-creation.component';
import { TaskModificationComponent } from './pages/task-modification/task-modification.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "new-task", component: TaskCreationComponent },
  { path: "update-task/:id", component: TaskModificationComponent },
  { path: "history", component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
