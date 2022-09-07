import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovie } from './single-movie/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = '5caa732474e64cf609bba25ff127d08e';

  //en-US
  //ar-SA
  constructor(private http: HttpClient) {}
  getMovies( pageNumber:number=1): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular?api_key=5caa732474e64cf609bba25ff127d08e&language=en-US&page=${pageNumber}`);
  }
  searchMovies(movieName: string):Observable<any> {
    if(movieName==''){
      return this.getMovies();
    }else{
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?api_key=5caa732474e64cf609bba25ff127d08e&language=en-US&page=1&include_adult=false&query=${movieName}`
    );
    }
  }

  getMovieById(movId:number):Observable<any>{
      return this.http.get(`https://api.themoviedb.org/3/movie/${movId}?api_key=${this.apiKey}&language=en-US`);
  }
}
