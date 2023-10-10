import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './Components/assignment1/assignment1.component';
import { CounterComponent } from './Components/counter/counter.component';
import { TodoComponent } from './Task3/todo/todo.component';
import { ItemListComponent } from './Task3/item-list/item-list.component';
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    CounterComponent,
    TodoComponent,
    ItemListComponent
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
