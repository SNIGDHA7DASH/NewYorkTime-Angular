import { Component, OnInit } from '@angular/core';
import { UsService } from '../us.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {
  UsData:Array<any> =[];

  constructor(private  usservice: UsService) {

  }

    ngOnInit(): void {
      // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
      //   console.log(respone.result());
      //   this.TopStoryData=respone;
      //   this.TopStoryData=this.TopStoryService.getreceipe()
      this.usservice.getreceipe().subscribe(data =>{
        console.log(data.results);
        
        // this.list = data.hits[0].recipe;
         this.UsData= data.results;
      })
    }
  
  }
  
  
