import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {StartComponent} from "./start/start.component";
import {MovieListComponent} from "./movie-list/movie-list.component";

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
