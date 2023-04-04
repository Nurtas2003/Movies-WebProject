import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
  constructor(public router: Router) {
    AppComponent.isLogged = false;
  }

  goToHome(){
    this.router.navigate(["start"])
  }
  loginButton(){
    this.router.navigate(["login"])
  }

  // loginButton(): void{
  //   this.router.navigateByUrl('/login');
  // }

  registerButton(){
    this.router.navigate(["register"])
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      AppComponent.isLogged = true;
    }
  }
  get isLogged(): boolean{
    return AppComponent.isLogged;
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    AppComponent.isLogged = false;
  }
}
