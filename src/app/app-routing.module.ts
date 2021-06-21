import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtsComponent } from './arts/arts.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ScienceComponent } from './science/science.component';
import { SearchComponent } from './search/search.component';
import { UsComponent } from './us/us.component';
import { PoliticsComponent } from './politics/politics.component';
import { NyComponent } from './ny/ny.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { BooksComponent } from './books/books.component'


const routes: Routes = [

{
    path:"",
    component: CardsComponent

},
{
  path:"opinion",
  component: OpinionComponent
},
{
  path:"science",
  component:ScienceComponent
},
{
  path:"arts",
  component:ArtsComponent
},
{
  path : 'search' , 
  component : SearchComponent

},
{
  path:"us",
  component:  UsComponent
},
{
  path:"politics",
  component:PoliticsComponent
},
{
  path:"ny",
  component:NyComponent
},
{
  path:"tech",
  component:TechComponent
},
{
  path:'health',
  component:HealthComponent
},
{
  path:'sports',
  component:SportsComponent
},
{
  path:"books",
  component:BooksComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
