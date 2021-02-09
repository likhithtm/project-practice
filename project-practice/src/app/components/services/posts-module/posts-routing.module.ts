import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPostsComponent } from '../../editPosts/editPosts/editPosts.component';
import { ServicesComponent } from '../../../components/services/services.component';


const routes: Routes = [
    // grouping the roots to a specific posts component
    // { 
        // path: 'posts', // component less route means no component specified, for this path there is a childeren array, but not component 
        // children: [
            { path: 'posts-service', component: ServicesComponent },
            { path: 'edit-posts/:postsId', component: EditPostsComponent },
        // ]      
    // }
];

@NgModule({
    // use forChild() method for featured routing module
  imports: [
      RouterModule.forChild(routes)
    ],
  exports: [
      RouterModule
    ]
})
export class PostsRoutingModule { }
