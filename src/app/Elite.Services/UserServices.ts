import { Injectable } from '@angular/core';  
import { Http, Headers, RequestOptions, Response } from '@angular/http';  
import { Observable, Subject } from 'rxjs/Rx';  
import 'rxjs/Rx'; //get everything from Rx    
import 'rxjs/add/operator/toPromise';  
import { IUser } from "../Elite.Model/IUser";
import { DatabaseService } from "../Elite.DataAccess/DatabaseService";

@Injectable()
export class UserService {  
    
    constructor(private dbService: DatabaseService) {}  
    //    
    getUsers(): Observable < IUser[] > {  
         return this.dbService.get()
         .map(x => {return <IUser[]>x;
      }).catch(this.handleError);
    }  
    //    
    private handleError(errorResponse: Response) {  
        console.log(errorResponse.statusText);  
        return Observable.throw(errorResponse.json().error || "Server error");  
    }  
}