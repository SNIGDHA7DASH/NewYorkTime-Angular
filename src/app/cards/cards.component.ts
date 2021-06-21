import { Component, OnInit, } from '@angular/core';
import { TopstoryService } from '../topstory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  TopStoryData:Array<any> =[];

  constructor(private topStoryservice : TopstoryService) {

  }

  ngOnInit(): void {
    // this.TopStoryService.getreceipe().subscribe((respone:any)=>{
    //   console.log(respone.result());
    //   this.TopStoryData=respone;
    //   this.TopStoryData=this.TopStoryService.getreceipe()
    this.topStoryservice.getreceipe().subscribe(data =>{
      console.log(data.results);
      
      // this.list = data.hits[0].recipe;
       this.TopStoryData = data.results;
    })
  }

}

