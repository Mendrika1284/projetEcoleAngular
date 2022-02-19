import { TestBed } from '@angular/core/testing';

import { SignalementserviceService } from './signalementservice.service';

describe('SignalementserviceService', () => {
  let service: SignalementserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalementserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
