import { Router } from '@angular/router';
import { MoviesService } from './../../services/movies-services/movies.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddMovieComponent } from './partials/add-movie/add-movie.component';

@Component({
  selector: 'app-movies-services',
  templateUrl: './movies-services.component.html',
  styleUrls: ['./movies-services.component.css']
})
export class MoviesServicesComponent implements OnInit {
  response;
  movie;
  movieId;
  deleteSuccess;
  deleteError;
  moviesObj;
  indexOfObj;
  newMovieId;
  movieName;
  addMovieRes;
  addSuccess;
  constructor(
    private moviesServices: MoviesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.moviesServices.getMoviesServices().subscribe(
      success => {
        this.response = success;
      },
      error => {
        this.response = error.message;
      }
    );
  }

  redirectToHome() {
    this.router.navigate(['/dashboard']);
  }

  editMovies(movie) {
    this.movie = movie;
    this.router.navigate(['/moviesEdit', this.movie.id]);
  }

  deleteMovies(movieObj) {
    // console.log(movieObj); return false;
    this.movieId = movieObj.id;
    this.moviesServices.deleteMovieById(this.movieId).subscribe(
      success => {
        this.deleteSuccess = success;
        this.indexOfObj = this.response.indexOf(movieObj);
        this.response.splice(this.indexOfObj, 1);
        this.router.navigate(['/movies-service']);
      },
      error => {
        this.deleteError = error.message;
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMovieComponent, {
      width: '250px',
      data: {id: this.newMovieId, name: this.movieName}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addMovieRes = result;
      this.getAllMovies();
    });
  }
}
