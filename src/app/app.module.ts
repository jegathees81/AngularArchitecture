import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Elite.View/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule, routedComponents } from "./app.route";
import { UsersComponent } from './Elite.View/users/users.component';
import { UserService } from "./Elite.Services/UserServices";
import { HttpModule } from "@angular/http";
import { FooterComponent } from './footer/footer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ButtonGroupComponent } from './Shared/button-group/button-group.component';
import { TodolistComponent } from './Elite.View/todolist/todolist.component';
import { TodoComponent } from './Elite.View/todolist/todo/todo.component';
import { FilterComponent } from './Elite.View/filter/filter.component';
import { FilterLinkComponent } from './Elite.View/filter/filter-link/filter-link.component';
import { DatabaseService } from "./Elite.DataAccess/DatabaseService";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    routedComponents,
    UsersComponent,
    FooterComponent,
    ButtonGroupComponent,
    TodolistComponent,
    TodoComponent,
    FilterComponent,
    FilterLinkComponent    
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
   HttpModule,
   InfiniteScrollModule
  ],
  providers: [UserService,DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
