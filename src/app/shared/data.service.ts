import { Injectable } from '@angular/core';
import {Task} from './task';

import {Http,Headers,RequestOptions, Response} from '@angular/http';

import 'rxjs/Rx'; //get everything from Rx

@Injectable()
export class DataService {
    
    apiUrl : string = "http://task.sourabhsomani.com/api/todotasks";
    constructor(private _http:Http) { }
    
    getProjectName() {
        return 'Infragistics ToDo App ';
    }
  //  getTasks(): any {
       // return [        
      //  {'Id':'1','Title':'Go to Market 99','Status':'done'},
      //  {'Id':'2','Title':'Email to manager','Status':'pending'},
      //  {'Id':'3','Title':'Push code to GitHub','Status':'done'},
      //  {'Id':'4','Title':'Go for running','Status':'done'},
      //  {'Id':'5','Title':'Go to movie','Status':'pending'},
   // ]
  //  }
  
  getTasks(){
      return this._http.get(this.apiUrl)
      .map((response) => response.json());
  }

  addTask(task:Task){
       let body = JSON.stringify(task);
       console.log("in service");
       console.log(body);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.post(this.apiUrl,
                     body, options)
                    .map(this.extractData);                    
  }


  editTask(task:Task){
       let body = JSON.stringify(task);
       console.log("in service");
       console.log(body);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       return this._http.put(this.apiUrl+"/"+task.Id,
                     body, options)
                    .map(this.extractData);                    
  }

  private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}



}