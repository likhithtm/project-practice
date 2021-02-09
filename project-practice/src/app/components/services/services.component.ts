import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/app/services/posts-services/services.service';
import { AddPostsComponent } from './add-posts/add-posts/add-posts.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  response;
  postsId;
  movieName;
  addPostsResult;
  deleteSuccess;
  deleteError;

  constructor(
    private service: ServicesService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.service.getAllPosts().subscribe(
      success => {
        this.response = success;
        console.log(success);
      },
      error => {
        this.response = error.message;
        console.log(error);
      }
    );
  }

  redirectToHome() {
    this.router.navigate(['/dashboard']);
  }

  editPosts(posts) {
    this.postsId = posts.id;
    this.router.navigate(['posts/edit-posts', this.postsId]);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddPostsComponent, {
      width: '250px',
      data: { name: this.movieName }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.addPostsResult = result;
      this.getAllPosts();
    });
  }

  deletePost(postObj) {
    this.service.deletePosts(postObj.id).subscribe(data => {
      this.deleteSuccess = 'Post Deleted';
      const index = this.response.indexOf(postObj);
      this.response.splice(index, 1);
    },
    error => {
      this.deleteError = error.message;
    });
  }
}
