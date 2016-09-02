import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {Observable} from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'tasks',
    templateUrl: 'tasks.component.html',
    styleUrls :['tasks.component.css']
    
})
export class TasksComponent implements OnInit {
    
       tasks : Observable<any[]>; 
    
        constructor(private dataService: DataService) { }
    
      ngOnInit() {
          
          this.tasks = this.dataService.getTasks();
          
       }

       updateStatus(task:any){
         
           console.log(task);
           if(task.Status == 'pending'){
                  task.Status = 'done';
                  console.log("a");
           }
           else if(task.Status === 'done'){
                task.Status = 'pending';
                  console.log("b");
           }

            console.log(task);
       this.dataService.editTask(task).subscribe();
       console.log("task updated");
       
         
       }


}