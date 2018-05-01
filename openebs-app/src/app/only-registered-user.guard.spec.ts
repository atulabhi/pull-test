import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyRegisteredUserGuard } from './only-registered-user.guard';

describe('OnlyRegisteredUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyRegisteredUserGuard]
    });
  });

  it('should ...', inject([OnlyRegisteredUserGuard], (guard: OnlyRegisteredUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
