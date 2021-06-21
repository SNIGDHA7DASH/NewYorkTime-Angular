import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private route:Router) { }
  fetchNewsApiUrl  ="";
  intFetchedData:Observable<any>  | undefined
  fetchedNewsDisplay:any = [];
  keyword:string ="";

  fetchResultByKey(key:any):void{
    console.log(key);
    this.keyword = key;
    this.fetchNewsApiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${key}&api-key=STEjRjlp3wa3gl8A2x6mkmls9y9QBfns";
    this.intFetchedData = this.http.get(this.fetchNewsApiUrl);
    this.intFetchedData.subscribe((result)=>{
      console.log(result);
      this.fetchedNewsDisplay = result.response.docs;
      console.log(this.fetchedNewsDisplay);
      this.route.navigate(["search"])
    })
  }
}
