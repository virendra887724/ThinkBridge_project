import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  adminName: any;
  password: any;
  confirmPassword: any;

  ngOnInit() {
  }

  signIn(): void {
    localStorage.setItem("adminName", this.adminName)
    localStorage.setItem("password", this.password)
    if (this.password == this.confirmPassword) {
      if ((localStorage.getItem("adminName") && localStorage.getItem("password")) != 'undefined') {
        this.router.navigate(['login'])
      } else if (localStorage.getItem("adminName") == 'undefined') {
        alert("Please enter user name")
      } else if (localStorage.getItem("password") == 'undefined') {
        alert("Please enter password")
      }
    } else {
      alert("Password doesn't matched")
    }
  }

}
