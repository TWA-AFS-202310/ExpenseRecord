import { RouterModule, Routes } from "@angular/router";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";

import { ExpenseComponent } from "./expense/expense.component";
import { ChildComponent } from "./expense/child/child.component";


const route: Routes=[
    {path:'',component:ExpenseComponent},
    {path:'item',component:ChildComponent},
];
@NgModule({
    imports: [RouterModule.forRoot(route)],
    exports: [RouterModule]
})
export class AppRoutingModule{}