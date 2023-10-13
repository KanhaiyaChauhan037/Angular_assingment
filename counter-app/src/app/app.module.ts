import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './Components/assignment1/assignment1.component';
import { CounterComponent } from './Components/counter/counter.component';
import { TodoComponent } from './Task3/todo/todo.component';
import { ItemListComponent } from './Task3/item-list/item-list.component';
import { FormsModule } from "@angular/forms";
import { TastComponent } from './Day4/tast/tast.component';
import { ItemlistComponent } from './Day4/itemlist/itemlist.component';
import { FormdataComponent } from './Day4/formdata/formdata.component';
@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    CounterComponent,
    TodoComponent,
    ItemListComponent,
    TastComponent,
    ItemlistComponent,
    FormdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
