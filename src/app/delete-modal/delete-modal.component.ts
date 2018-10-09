
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieserviceService } from '../services/movieservice.service';

import { MoviesDBService } from '../services/movies-db.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {
 

  @Input() id: number;
  isNotEmpty: bool;
  movie: Movie;
  moadleTitle: string;
  constructor(  public activeModal: NgbActiveModal,private movieService: MovieserviceService,private movieDbService: MoviesDBService  ) { }

  ngOnInit(): void {}
  confirm(){
    this.movieDbService.deletemovies(this.id);
    this.activeModal.close('Modal Closed');
  }

  closeModal() {
      this.activeModal.close('Modal Closed');
  }
  getMovies(id): void {
    this.movie=this.movieDbService.getmoviesbyid(id);
       debugger;
  }
}
  