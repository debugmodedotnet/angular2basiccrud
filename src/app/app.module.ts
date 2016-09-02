import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import {TasksComponent} from './task/tasks.component';
import {AddtaskComponent} from './task/addtask.component';

import { app_routing } from './app.routing';
import { DataService } from './shared/data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, app_routing ],
  declarations: [ AppComponent,TasksComponent, HomeComponent,AddtaskComponent],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }