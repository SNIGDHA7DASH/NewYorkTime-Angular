import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http: HttpClient) { }
  getreceipe(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=STEjRjlp3wa3gl8A2x6mkmls9y9QBfns");
  }
}
