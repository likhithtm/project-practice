import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/posts-services/services.service';

@Component({
  selector: 'app-editPosts',
  templateUrl: './editPosts.component.html',
  styleUrls: ['./editPosts.component.scss']
})
export class EditPostsComponent implements OnInit {
  postsId;
  postsByIdSuccess;
  postsByIdError;
  postsEditForm: FormGroup;
  showForm = false;
  posts;
  postsUpdateSuccess;
  postsUpdateError;

  constructor(
    private route: ActivatedRoute,
    private postsService: ServicesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.postsId = params['postsId'];
        if (this.postsId !== '') {
          this.getPostsById();
        }
      }
    );
  }

  getPostsById() {
    this.postsService.getPostsById(this.postsId).subscribe(
      success => {
        this.postsByIdSuccess = success;
        this.editPostsForm();
      },
      error => {
        this.postsByIdError = error.message;
      }
    );
  }

  editPostsForm() {
    this.postsEditForm = new FormGroup({
      postsId: new FormControl(this.postsId),
      postsTitle: new FormControl(this.postsByIdSuccess.title),
      postsAuthor: new FormControl(this.postsByIdSuccess.author)
    });
    this.showForm = true;
  }

  updatePosts() {
    this.posts = {
      title: this.postsEditForm.controls.postsTitle.value,
      author: this.postsEditForm.controls.postsAuthor.value
    };

    this.postsService.updatePostsById(this.postsId, this.posts).subscribe(
      success => {
        this.postsUpdateSuccess = success;
        this.router.navigate(['/posts-service']);
      },
      error => {
        this.postsUpdateError = error.message;
      }
    );
  }

  getPostsControl(postsEditForm) {
    console.log(postsEditForm);
  }

}
