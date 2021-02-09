import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private httpObject: HttpClient) { }

  getAllPosts(): Observable<any> {
    return this.httpObject.get(environment.baseUrl + 'posts');
  }

  getPostsById(postsId): Observable<any> {
    return this.httpObject.get(environment.baseUrl + 'posts/' + postsId);
  }

  updatePostsById(postsId, postsObj): Observable<any> {
    return this.httpObject.put(environment.baseUrl + 'posts/' + postsId, postsObj);
  }

  addPosts(postsObj): Observable<any> {
    return this.httpObject.post(environment.baseUrl + 'posts', postsObj);
  }

  deletePosts(postId): Observable<any> {
    return this.httpObject.delete(environment.baseUrl + 'posts/' + postId);
  }

}
