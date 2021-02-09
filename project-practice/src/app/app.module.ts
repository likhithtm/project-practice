import { ParentAComponent } from './components/input-output-properties/parent-A/parent-A.component';
import { ChildComponent } from './components/subjects/child/child.component';
import { ParentComponent } from './components/subjects/parent/parent.component';
// import { MoviesComponent } from './components/movies/movies.component';
// import { MoviesServicesComponent } from './components/movies-services/movies-services.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material.module';
// import { AddMovieComponent } from './components/movies-services/partials/add-movie/add-movie.component';
// import { MatDialogModule } from '@angular/material';

import { AddPostsComponent } from './components/services/add-posts/add-posts/add-posts.component';
import { AngularHooksComponent } from './components/angular-hooks/angular-hooks/angular-hooks.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators/rxjs-operators.component';
import { TableComponentComponent } from './components/table-component/table-component/table-component.component';
import { ChildBComponent } from './components/input-output-properties/child-B/child-B.component';
// import { PostsModuleModule } from './components/services/posts-module/posts-module.module';
import { MoviesServicesModule } from './components/movies-services/movies-services.module';
import { MatDialogModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    // MoviesServicesComponent,
    // MoviesComponent,
    // AddMovieComponent,
    AddPostsComponent,
    AngularHooksComponent,
    RxjsOperatorsComponent,
    TableComponentComponent,
    ParentComponent,
    ChildComponent,
    ParentAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    //all the feature routing module must be ablove the AppRoutingModule
    // because in AppRoutingModule wilde card entry is there.
    // PostsModuleModule,
    MoviesServicesModule,
    MatDialogModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // MaterialModule,
    // MatDialogModule,
  ],
  providers: [],
  entryComponents: [
    // AddMovieComponent,
    AddPostsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
