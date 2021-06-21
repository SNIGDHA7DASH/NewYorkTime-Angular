import { TestBed } from '@angular/core/testing';

import { TopstoryService } from './topstory.service';

describe('TopstoryService', () => {
  let service: TopstoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopstoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
