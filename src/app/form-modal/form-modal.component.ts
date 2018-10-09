
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieserviceService } from '../services/movieservice.service';
import { MoviesDBService } from '../services/movies-db.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent {

  @Input() id: number;
  isNotEmpty: bool;
  movie: Movie;
  moadleTitle: string;
  constructor(  public activeModal: NgbActiveModal,private movieService: MovieserviceService,private movieDbService: MoviesDBService  ) { }

  ngOnInit(): void {
    this.isNotEmpty=true;
    if(this.id!= null){
      this.getMovies(this.id);
      this.moadleTitle="Edit Movie";
    }
    else{
      this.movie= new Object();
       this.moadleTitle="Add Movie";
    }
  }
  save(){
    this.checkfields();
    if(this.isNotEmpty){
      if(this.id!= null){
        this.movieDbService.updatemovies(this.movie,this.id);
        this.activeModal.close('Modal Closed');
      }
      else{
        this.movieDbService.add(this.movie);
         this.activeModal.close('Modal Closed');
      }
    }
    else
      alert("one of the fields is empty");
  }
  closeModal() {
      this.activeModal.close('Modal Closed');
   
  }
  checkfields() {
   if(!this.movie.Title){
         this.isNotEmpty=false;
   }
   if(!this.movie.Year){
         this.isNotEmpty=false;
   }
   if(!this.movie.Runtime){
         this.isNotEmpty=false;
   }
   if(!this.movie.Genre){
         this.isNotEmpty=false;
   }
   if(!this.movie.Director){
         this.isNotEmpty=false;
   }
  }
  getMovies(id): void {
    this.movie=this.movieDbService.getmoviesbyid(id);
       debugger;
  }
}
  