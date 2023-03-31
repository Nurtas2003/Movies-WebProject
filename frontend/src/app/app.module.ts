import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import {Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
const routes: Routes = [
  {
    path: "start",
    component: StartComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "movies",
    component: MovieListComponent
  },
  {
    path: "",
    redirectTo: 'start',
    pathMatch:"full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TopBarComponent,
    RegisterComponent,
    LoginComponent,
    StartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
