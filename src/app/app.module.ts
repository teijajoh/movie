import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './movie/movie.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MoviesListComponent,
    MovieComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
