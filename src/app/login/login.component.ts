import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: any;
  password: any;
  // loginStatus:boolean = false

  ngOnInit() {
  }

  login() {
    if ((localStorage.getItem("adminName") || localStorage.getItem("password")) != null) {
      if (this.username == localStorage.getItem("adminName") && this.password == localStorage.getItem("password")) {
        var loginStatus = "true"
        this.router.navigate(["allProduct"]);
        localStorage.setItem("loginStatus",loginStatus)
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert("Please Sign Up First!")
    }
  }

  signUp() {
    this.router.navigate(["signup"]);
  }

}