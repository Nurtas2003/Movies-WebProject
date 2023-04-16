import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {Location} from "@angular/common";
import {AppComponent} from '../app.component';
import {Movie} from "../movies";
import {MovieService} from "../movie.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router:Router,
              private loginService: LoginService,
              private movieSer: MovieService

  ) {
    AppComponent.isLogged = false;
  }
  username='';
  password='';
  movies: Movie[]=[];

  name='';
  description = '';
  rate='';
  length='';
  like=0;
  img='';
  imgCover='';
  genre=0;

  get isLogged(): boolean{
    return AppComponent.isLogged;
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')
    if(token){
      AppComponent.isLogged = true
    }
    this.getMovies()
  }

  login(){
    this.loginService.login(this.username, this.password).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      AppComponent.isLogged=true;

    });
  }

  getMovies(): void{
    this.movieSer.getMovies().subscribe((data)=>{
      console.log(data)
      this.movies=data;
    });
  }

  addMovie(): void {
  //   const newMovie: { cover: string; img: string; rate: string; like: number; name: string; genre: number; length: string; description: string } = {
  //     name: this.name,
  //     description: this.description,
  //     genre: this.genre,
  //     rate: this.rate,
  //     length: this.length,
  //     img: this.img,
  //     cover: this.imgCover,
  //     like: this.like
  //   };
  //
  //   // @ts-ignore
  //   this.movieSer.createMovies(newMovie).subscribe((createdMovie: Movie) => {
  //     this.movies.push(createdMovie);
  //
  //     this.name = '';
  //     this.description = '';
  //     this.genre = 0;
  //     this.rate = '';
  //     this.length = '';
  //     this.img = '';
  //     this.imgCover = '';
  //     this.like = 0;
  //   });
  }

  // deleteMovie(movieId: number): void {
  //   // Find the index of the movie to delete
  //   const index = this.movies.findIndex(movie => movie.id === movieId);
  //
  //   if (index !== -1) {
  //     // Remove the movie from the list
  //     this.movies.splice(index, 1);
  //
  //     // Delete the movie from the server
  //     this.movieSer.deleteMovies(movieId).subscribe();
  //   }
  // }

  // updateMovie(movie: Movie): void {
  //   // @ts-ignore
  //   this.movieSer.updateMovies(movie.id, movie).subscribe(() => {
  //     console.log(`Movie with id ${movie.id} was updated successfully.`);
  //   }, (error) => {
  //     console.log(`Error occurred while updating movie with id ${movie.id}: ${error}`);
  //   });
  // }



}
