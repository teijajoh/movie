import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  template: ` 



  <div>
  <h1> All movies </h1>
  <hr>
  <app-movie [movie]="movie1"></app-movie>
</div>
<!-- 
<app-movie [movie]="movie1"></app-movie> -->
  `
 
})
export class MoviesListComponent  {
  movie1 = {
    id: 1,
    name: "Forrest Gump",
  }
  movie2 = {
    id: 2,
    name: "Hobbit",
    }
   
 }
