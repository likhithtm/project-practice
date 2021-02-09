import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies-services/movies.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  addMovieSuccess;
  addMovieError;
  movieObj;
  movieGetSuccess;
  movieGetError;
  movieAddObj = new FormGroup({
    movieId: new FormControl(''),
    movieName: new FormControl('')
  });
  constructor(
    private movieService: MoviesService,
    private router: Router,
    public dialogRef: MatDialogRef<AddMovieComponent>
  ) { }

  ngOnInit() {
  }
  addFormSubmit() {
    this.movieObj = {
      id: this.movieAddObj.controls.movieId.value,
      title: this.movieAddObj.controls.movieName.value
    };
    this.movieService.addMovie(this.movieObj).subscribe(
      success => {
        this.addMovieSuccess = success;
        this.dialogRef.close();
      },
      error => {
        this.addMovieError = error.message;
      }
    );
  }
}
