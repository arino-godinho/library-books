import { TestBed, inject } from '@angular/core/testing';

import { ApiBooksService } from './api-books.service';

describe('ApiBooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiBooksService]
    });
  });

  it('should be created', inject([ApiBooksService], (service: ApiBooksService) => {
    expect(service).toBeTruthy();
  }));
});
