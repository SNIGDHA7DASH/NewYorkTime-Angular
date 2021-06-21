import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtsService } from '../arts.service';


@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {
  ArtsData:Array<any> =[];


  constructor(private artsservice : ArtsService) { }

  ngOnInit(): void {

    this.artsservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.ArtsData = data.results;

      })
    }
  
  }
  