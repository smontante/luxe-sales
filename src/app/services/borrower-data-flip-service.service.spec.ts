import { TestBed } from '@angular/core/testing';

import { BorrowerDataFlipServiceService } from './borrower-data-flip-service.service';

describe('BorrowerDataFlipServiceService', () => {
  let service: BorrowerDataFlipServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BorrowerDataFlipServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
