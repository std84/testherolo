import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
}) 
export class MoviesDBService {

  constructor() { }
  movies: Object[]=[];

  add(message: Object) {
    this.movies.push(message);
  }
  getmovies():  Object[]  {
   return this.movies;
  }
  addmovies(name: Object): void {
    if (!name) { return; }
   	this.movies.push(name);
  }
  setmovies(name: Object): void {
   	this.movies.push(name);
  }
  getmoviesbyid(id: number): Object {
    return this.movies[id];
  }
  updatemovies(movie: Object, id: number): void {
    this.movies[i]= movie;
  }
  deletemovies( id: number): void {
      this.movies.splice(id, 1);
  }
}
