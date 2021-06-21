import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScienceService } from '../science.service';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  ScienceData:Array<any> =[];



  constructor(private scienceservice : ScienceService) { }

  ngOnInit(): void {

    this.scienceservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.ScienceData = data.results;
      })
    }
  
  }
  