import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerSummaryFlipComponent } from './borrower-summary-flip.component';

describe('BorrowerSummaryFlipComponent', () => {
  let component: BorrowerSummaryFlipComponent;
  let fixture: ComponentFixture<BorrowerSummaryFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerSummaryFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerSummaryFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
