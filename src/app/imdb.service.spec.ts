import { TestBed, inject } from '@angular/core/testing';

import { ImdbService } from './imdb.service';

describe('ImdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImdbService]
    });
  });

  it('should be created', inject([ImdbService], (service: ImdbService) => {
    expect(service).toBeTruthy();
  }));
});
