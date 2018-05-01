import { TestBed, inject } from '@angular/core/testing';

import { HangoutService } from './hangout.service';

describe('HangoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HangoutService]
    });
  });

  it('should be created', inject([HangoutService], (service: HangoutService) => {
    expect(service).toBeTruthy();
  }));
});
