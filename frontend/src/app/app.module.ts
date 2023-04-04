import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RatingModule} from 'ng-starrating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import {Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
import { GenreComponent } from './genre/genre.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { FilterPipe } from './movie-list/filter.pipe';
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
    GenreComponent,
    MovieFilterComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    RouterModule.forRoot([
    //   {path: '', component: MovieListComponent},
    //   {path: 'movies', component: MovieListComponent},
    //   // {path: 'movies/:id', component: MovieDetailsComponent},
    //   {path: 'genre/:genreId', component: GenreComponent},
      {path: 'login', component: LoginComponent},
    //   {path: 'register', component: RegisterComponent},
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
