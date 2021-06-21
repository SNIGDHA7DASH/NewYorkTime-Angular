import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoliticsService } from '../politics.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  PoliticsData:Array<any> =[];

  constructor(private politicsservice : PoliticsService) {

  }

  ngOnInit(): void {
    // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.politicsservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.PoliticsData = data.results;
    })
  }

}