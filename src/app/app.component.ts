import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUrl: any

  constructor(private router: Router) {
  }
  
  ngOnInit() {
  
  }

  title = 'Think Bridge';


  aboutClick() {
    window.location.href = "https://thinkbridge.com/leadership-team/"
  }

  contactClick() {
    window.location.href = "https://careers.thinkbridge.com/jobs/Careers"
  }

  addProduct() {
    this.router.navigate(['addProduct'])
  }

  loginPage(){
    this.router.navigate(['login'])
  }

}
