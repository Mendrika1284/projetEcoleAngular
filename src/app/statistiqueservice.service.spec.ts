import { TestBed } from '@angular/core/testing';

import { StatistiqueserviceService } from './statistiqueservice.service';

describe('StatistiqueserviceService', () => {
  let service: StatistiqueserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatistiqueserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
