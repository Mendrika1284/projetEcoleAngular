import { TestBed } from '@angular/core/testing';

import { SignalementaffecterService } from './signalementaffecter.service';

describe('SignalementaffecterService', () => {
  let service: SignalementaffecterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementaffecterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
