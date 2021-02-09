import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ServicesService } from 'src/app/services/posts-services/services.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  postsAddObj;
  postsAddSuccess;
  postsAddError;
  postsObj = new FormGroup({
    postsTitle: new FormControl(''),
    postsAuthor: new FormControl('')
  });
  constructor(
    private postsService: ServicesService,
    public dialogRef: MatDialogRef<AddPostsComponent>
  ) { }

  ngOnInit() {
  }

  postsAdd() {
    this.postsAddObj = {
      title: this.postsObj.controls.postsTitle.value,
      author: this.postsObj.controls.postsAuthor.value
    };

    this.postsService.addPosts(this.postsAddObj).subscribe(
      success => {
        this.postsAddSuccess = success;
        this.dialogRef.close();
      },
      error => {
        this.postsAddError = error.message;
      }
    )
  }

}
