import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  postsFunction() {
    this.router.navigate(['posts/posts-service']);
  }

  moviesFunction() {
    this.router.navigate(['/movies-service']);
  }

  angularHooks() {
    this.router.navigate(['/angular-hooks']);
  }

  angularTxJs() {
    this.router.navigate(['/angular-rxjs']);
  }

  subject() {
    this.router.navigate(['/angular-subject']);
  }

  ioproperties() {
    this.router.navigate(['/input-output-properties']);
  }
}
