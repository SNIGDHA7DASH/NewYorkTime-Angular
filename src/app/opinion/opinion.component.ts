import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpinionService } from '../opinion.service';

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.css']
})
export class OpinionComponent implements OnInit {

  OpinionData:Array<any> =[];

  constructor( private opinionservice : OpinionService) { }

  ngOnInit(): void {

     // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.opinionservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.OpinionData = data.results;
      })
    }
  
  }
  
  