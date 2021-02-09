import { MoviesService } from './../../services/movies-services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieId;
  movieObjeById;
  movies;
  updateSuccess;
  updateError;
  rForm: FormGroup;
  showForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = +params['movieId']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      if (this.movieId !== '') {
        this.getMovieById();
      }
   });

  }

  getMovieById() {
    this.moviesService.getMovieById(this.movieId).subscribe(
      success => {
        this.movieObjeById = success;
        this.createForm();
      },
      error => {
        this.movieObjeById = error.message;
      }
    );
  }

  createForm() {
    this.rForm = new FormGroup({
      movieId: new FormControl(this.movieId, [Validators.required]),
      movieName: new FormControl(this.movieObjeById.title, [Validators.required, Validators.minLength(3)])
    });
    this.showForm = true;
  }

  formGroup(x) {
    console.log(x);
  }

  updateMoviesById() {
    this.movies = {
      id: this.rForm.controls.movieId.value,
      title: this.rForm.controls.movieName.value
    };

    this.moviesService.updateMovieById(this.movieId, this.movies).subscribe(
      success => {
        this.updateSuccess = success;
        console.log(success);
        this.createForm();
        this.router.navigate(['/movies-service']);
      },
      error => {
        this.updateError = error.message;
        console.log(error);
      }
    );
  }
}
