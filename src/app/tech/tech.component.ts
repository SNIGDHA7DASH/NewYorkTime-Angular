import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechService } from '../tech.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  TechData:Array<any> =[];

  constructor(private techservice : TechService) {

  }

  ngOnInit(): void {
    // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.techservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.TechData = data.results;
    })
  }

}

