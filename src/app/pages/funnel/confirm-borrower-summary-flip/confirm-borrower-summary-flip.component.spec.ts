import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBorrowerSummaryFlipComponent } from './confirm-borrower-summary-flip.component';

describe('ConfirmBorrowerSummaryFlipComponent', () => {
  let component: ConfirmBorrowerSummaryFlipComponent;
  let fixture: ComponentFixture<ConfirmBorrowerSummaryFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmBorrowerSummaryFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBorrowerSummaryFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
