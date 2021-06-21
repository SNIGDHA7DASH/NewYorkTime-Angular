import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  SportsData:Array<any> =[];

  constructor(private sportsservice : SportsService) { }

  ngOnInit(): void {
    this.sportsservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.SportsData = data.results;
    })
  }

}


