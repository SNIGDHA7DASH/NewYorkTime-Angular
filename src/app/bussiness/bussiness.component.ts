import { Component, OnInit } from '@angular/core';
import { BussinessService } from '../bussiness.service'

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit {
    business : any;
      constructor(private businessService:  BussinessService) { }
    
      ngOnInit(): void {
        this.businessService.getbusiness().subscribe(data =>{
          console.log(data.results);
          this.business = data.results;
        
        });
      }
    
    }

