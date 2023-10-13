import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TastComponent } from './Day4/tast/tast.component';
import { FormdataComponent } from './Day4/formdata/formdata.component';
import { ItemlistComponent } from './Day4/itemlist/itemlist.component';
const routes: Routes = [
  {path:"", component:FormdataComponent},
  {path:"item", component:ItemlistComponent},
  {path:"**", redirectTo:""},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
