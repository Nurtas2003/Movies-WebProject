import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {Location} from "@angular/common";
import {AppComponent} from "../app.component";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,
              private loginService: LoginService,
              private location: Location
  ) {
  }
  username='';
  password='';
  isTaken=false;

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  goToMovies(){
    // this.router.navigate(["movies"])
    this.loginService.login(this.username, this.password).subscribe((data) =>{
      AppComponent.isLogged=true;
      this.location.back();
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', this.username);
      this.username='';
      this.password='';
    });
  }
}
