import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {
    
    constructor(private http: Http, private jsonFileURL: string) {
    }
    protected buildURL(): string {
        return this.jsonFileURL;
    }

    public get(): Observable<any[]> {
        return this.http.get(this.buildURL())
            .map((response) => response.json() || []);
    }
}