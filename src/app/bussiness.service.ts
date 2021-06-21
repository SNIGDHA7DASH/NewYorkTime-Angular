import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  constructor(private http: HttpClient) { }
  getbusiness(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=STEjRjlp3wa3gl8A2x6mkmls9y9QBfns")
}
}