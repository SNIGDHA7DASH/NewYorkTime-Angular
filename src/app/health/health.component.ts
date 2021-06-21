import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthService } from '../health.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  HealthData:Array<any> =[];

  constructor(private healthservice : HealthService) {

  }

  ngOnInit(): void {
    // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.healthservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.HealthData = data.results;
    })
  }

}




  