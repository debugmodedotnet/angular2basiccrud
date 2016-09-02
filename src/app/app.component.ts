import { Component } from '@angular/core';
import {TasksComponent} from './task/tasks.component';

@Component({ 
  selector: 'app-container',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  
  num1 : number ; 
  num2 : number;
  res: number; 
  add = function() : void {
     this.res = this.num1+this.num2; 
  };
  message : string = "Let us add two numbers in AngularJS 2 how "
  constructor() {

  }
  
}