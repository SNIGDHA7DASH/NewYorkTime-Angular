import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fetchedNewsDisplay:any = [];
  keyword:string ="";
  constructor(private searchService:SearchService ) { }

  ngOnInit(): void {
    
    this.load();
      }
    
load(){
  this.fetchedNewsDisplay= this.searchService.fetchedNewsDisplay
  this.keyword = this.searchService.keyword
}
    }