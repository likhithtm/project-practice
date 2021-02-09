import { ParentAComponent } from './components/input-output-properties/parent-A/parent-A.component';
import { ParentComponent } from './components/subjects/parent/parent.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators/rxjs-operators.component';
import { AngularHooksComponent } from './components/angular-hooks/angular-hooks/angular-hooks.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'angular-hooks', component: AngularHooksComponent },
  { path: 'angular-rxjs', component: RxjsOperatorsComponent },
  { path: 'angular-subject', component: ParentComponent },
  { path: 'input-output-properties', component: ParentAComponent },
  { path: 'posts', loadChildren: () => import('./components/services/posts-module/posts-module.module').then(m => m.PostsModuleModule) },
  { path: 'movies', loadChildren: () => import('./components/movies-services/movies-services.module').then(m => m.MoviesServicesModule) },
  //wild card entry
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
