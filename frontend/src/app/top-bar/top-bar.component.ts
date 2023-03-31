import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(public router: Router) {
  }

  goToHome(){
    this.router.navigate(["start"])
  }
  loginButton(){
    this.router.navigate(["login"])
  }

  registerButton(){
    this.router.navigate(["register"])
  }
}
