import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input ('navItem') navItem = ""

  key:string ="";

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  fetchNews():void {
    this.searchService.fetchResultByKey(this.key);
  }

}
