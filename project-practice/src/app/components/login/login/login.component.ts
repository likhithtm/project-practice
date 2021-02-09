import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  pass = '';

  //creting the object
  loginObj = {
    username : null,
    pass : null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loginSubmit() {
    this.username = this.loginObj.username;
    this.pass = this.loginObj.pass;
    if (this.username === 'Admin' && this.pass === 'Admin') {
      this.router.navigate(['dashboard']);
    }

  }


}
