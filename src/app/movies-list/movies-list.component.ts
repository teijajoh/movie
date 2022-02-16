import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  template: ` 
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Movies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <canvas height="36" width="40" style="border-radius: inherit; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></canvas>
      </form>
    </div>
  </div>
</nav>


  <div>
  <h1> All movies </h1>
  <hr>
  <h2>{{movie1.name}}</h2>
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
