import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Movie} from './movies';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private client: HttpClient) { }
  BASE_URL: string = 'http://127.0.0.1:8000';
  getMovies(): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/movies/`);
  }

  // getMovieDetail(id: string): Observable<Movie>{
  //   return this.client.get<Movie>(`${this.BASE_URL}/api/movies/${id}/`);
  // }

  getMoviesByGenreId(id: any): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/genres/${id}/`);
  }

}

