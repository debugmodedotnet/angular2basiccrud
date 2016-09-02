import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Task} from '../shared/task';
import {DataService} from '../shared/data.service';

@Component({
    selector:'addtask',
    templateUrl:'./app/task/addtask.component.html'
})
export class AddtaskComponent{

    constructor(private _service:DataService, private _router : Router){
     
    }

   status = ['pending','done'];
   taskSubmited = false; 
   model = {Id:'',Title:'',Status:''};
   taskSubmit(){

       console.log("let us add task now");      
       this.model.Id = Math.random().toString(36).substring(7);
       console.log(JSON.stringify(this.model));
       this.taskSubmited = true; 
       this._service.addTask(this.model).subscribe();
       console.log("task added");
       this._router.navigate(['/home']);
       
   }

     get diagnostic() { return JSON.stringify(this.model); }
}