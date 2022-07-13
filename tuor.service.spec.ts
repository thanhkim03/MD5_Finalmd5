import { TestBed } from '@angular/core/testing';

import { TuorService } from './tuor.service';

describe('TuorService', () => {
  let service: TuorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
