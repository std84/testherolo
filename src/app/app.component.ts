import { Component, Pipe, PipeTransform  } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { MovieserviceService } from './services/movieservice.service';

import { MoviesDBService } from './services/movies-db.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartestone';
    movies: Object[] = [];
    movietmp: Object[] = [];
 movie: Object;
 searchtext: string;
  constructor( private modalService: NgbModal, private movieService: MovieserviceService ,private movieDbService: MoviesDBService ) { }
  ngOnInit() {
  
    this.getMoviesapi();
    this.movies=[];
    this.getMovies();
  }

  openFormModal(id) {
 
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = id; // should be the id
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  openDeleteModal(id) {
 
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.id = id; // should be the id
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  search(){
  this.movietmp=this.movies;

  var checktext=this.searchtext;
    var yahooOnly = this.movies.filter(function (entry) {
        return entry.Title==checktext
    });
    this.movies = yahooOnly;
  }
  edit(movieobj): void {
  	this.openFormModal(movieobj);
  }
  add(): void {
    this.openFormModal(null);
  }
  delete(idx): void {
      this.openDeleteModal(idx);
  };
  onKeydown(event) {
    if(this.searchtext==="")
      this.movies=this.movietmp;
 
  }
  getMoviesapi(): void {
    this.movieService.getMoviesapi().subscribe(data => {
       this.movieDbService.setmovies(data);
     });
     

  }
  getMovies(): void {
    this.movies=this.movieDbService.getmovies();
  }

}
