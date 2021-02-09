import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpObject: HttpClient) { }

  getMoviesServices(): Observable<any> {
    return this.httpObject.get(environment.baseUrl + 'movies');
  }

  getMovieById(movieId): Observable<any> {
    return this.httpObject.get(environment.baseUrl + 'movies/' + movieId);
  }

  updateMovieById(movieId, movieObj): Observable<any> {
    return this.httpObject.put(environment.baseUrl + 'movies/' + movieId, movieObj);
  }

  deleteMovieById(movieId): Observable<any> {
    return this.httpObject.delete(environment.baseUrl + 'movies/' + movieId);
  }

  addMovie(movieObj): Observable<any> {
    return this.httpObject.post(environment.baseUrl + 'movies', movieObj);
  }
}
