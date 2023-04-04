import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from './movies';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private client: HttpClient) { }
  BASE_URL = 'http://127.0.0.1:8000';
  getMovies(): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/movies`);
  }

  getMovieDetail(id: string): Observable<Movie>{
    return this.client.get<Movie>(`${this.BASE_URL}/api/movies/${id}/`);
  }

  getMoviesByGenreId(id: number): Observable<Movie[]>{
    return this.client.get<Movie[]>(`${this.BASE_URL}/api/genres/${id}/`);
  }

}

