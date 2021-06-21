import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NyService } from '../ny.service';
@Component({
  selector: 'app-ny',
  templateUrl: './ny.component.html',
  styleUrls: ['./ny.component.css']
})
export class NyComponent implements OnInit {
  NyData:Array<any> =[];

  constructor(private nyservice :  NyService) {

  }

  ngOnInit(): void {
    // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.nyservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.NyData = data.results;
    })
  }

}

