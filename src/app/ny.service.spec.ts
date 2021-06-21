import { TestBed } from '@angular/core/testing';

import { NyService } from './ny.service';

describe('NyService', () => {
  let service: NyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
