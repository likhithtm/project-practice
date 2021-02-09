import { ServicesComponent } from '../../services/services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleComponent } from './posts-module.component';
import { EditPostsComponent } from '../../editPosts/editPosts/editPosts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsRoutingModule } from './posts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PostsRoutingModule
  ],
  declarations: [
    PostsModuleComponent,
    ServicesComponent,
    EditPostsComponent
  ],
  // to be availabe to all modules
  exports: [
    CommonModule,
    ServicesComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PostsModuleModule { }
