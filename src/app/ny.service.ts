import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NyService {

  constructor(private http: HttpClient) { }


  getreceipe(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=STEjRjlp3wa3gl8A2x6mkmls9y9QBfns");
  }
}
