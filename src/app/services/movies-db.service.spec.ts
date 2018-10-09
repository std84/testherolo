import { TestBed } from '@angular/core/testing';
import { MoviesDBService } from './movies-db.service';

describe('MoviesDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesDBService = TestBed.get(MoviesDBService);
    expect(service).toBeTruthy();
  });
});
