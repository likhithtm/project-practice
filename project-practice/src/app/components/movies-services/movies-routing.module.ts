import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { MoviesServicesComponent } from './movies-services.component';
import { MoviesComponent } from '../movies/movies.component';

const routes: Routes = [
    { path: 'movies-service', component: MoviesServicesComponent },
    { path: 'moviesEdit/:movieId', component: MoviesComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MoviesRoutingModule { }