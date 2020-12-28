import { TestBed } from '@angular/core/testing';

import { FunnelDataService } from './funnel-data.service';

describe('FunnelDataService', () => {
  let service: FunnelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunnelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
