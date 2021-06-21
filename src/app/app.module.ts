import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule} from "@angular/common/http";
import { OpinionComponent } from './opinion/opinion.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { SearchComponent } from './search/search.component';
import { UsComponent } from './us/us.component';
import { PoliticsComponent } from './politics/politics.component';
import { NyComponent } from './ny/ny.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    NewsComponent,
    CardsComponent,
    OpinionComponent,
    ArtsComponent,
    ScienceComponent,
    SearchComponent,
    UsComponent,
    PoliticsComponent,
    NyComponent,
    TechComponent,
    HealthComponent,
    SportsComponent,
    BooksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
