// 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private http: HttpClient) { }
  getfood(): Observable<any> {
    return this.http.get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=STEjRjlp3wa3gl8A2x6mkmls9y9QBfns")
}
}