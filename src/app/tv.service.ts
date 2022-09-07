import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {
  apiKey: string = '5caa732474e64cf609bba25ff127d08e';
  constructor(private http: HttpClient) { }

  getTvShows():Observable<any>{
   return this.http.get(`https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }
}
