import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TastComponent } from './Day4/tast/tast.component';
import { FormdataComponent } from './Day4/formdata/formdata.component';
import { ItemlistComponent } from './Day4/itemlist/itemlist.component';
import { Task1Component } from './Day6/task1/task1.component';
import { Task2Component } from './Day6/task2/task2.component';
const routes: Routes = [
  {path:"home", component:FormdataComponent},
  {path:"item", component:ItemlistComponent},
  { path: "", component: Task1Component },
  {path:"item2",component:Task2Component},
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
