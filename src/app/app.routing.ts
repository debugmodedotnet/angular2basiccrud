import { RouterModule, Routes } from '@angular/router';
import {TasksComponent} from './task/tasks.component';
import {AddtaskComponent} from './task/addtask.component';
import { HomeComponent }     from './home/home.component';


const app_routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'addtask', component: AddtaskComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);