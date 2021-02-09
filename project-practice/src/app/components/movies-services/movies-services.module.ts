import { SharedModule } from './../../shared/shared.module';
// this is the feature module for the movies
// this feature module imports all the necessary components that uses to create the movies module
import { NgModule } from '@angular/core';
import { MoviesServicesComponent } from './movies-services.component';
import { AddMovieComponent } from './partials/add-movie/add-movie.component';
import { MatDialogModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from '../movies/movies.component';


@NgModule({
  declarations: [
    MoviesServicesComponent,
    AddMovieComponent,
    MoviesComponent
  ],
  imports: [
    MatDialogModule,
    MaterialModule,
    MoviesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AddMovieComponent,
  ],
})
export class MoviesServicesModule { }
