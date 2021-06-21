// 
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  data: any;
  foods: any;
    constructor(private foodService : FoodService) { }
  
    ngOnInit(): void {
      this.foodService.getfood().subscribe((data: { results: any; }) =>{
        console.log(data.results);
        // this.list = data.hits[0].recipe;
        this.foods = data.results;
      
      
      
    });
    }

}