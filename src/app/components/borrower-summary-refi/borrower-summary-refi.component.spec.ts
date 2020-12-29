import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerSummaryRefiComponent } from './borrower-summary-refi.component';

describe('BorrowerSummaryRefiComponent', () => {
  let component: BorrowerSummaryRefiComponent;
  let fixture: ComponentFixture<BorrowerSummaryRefiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerSummaryRefiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerSummaryRefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
