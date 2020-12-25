import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmBorrowerSummaryComponent } from './confirm-borrower-summary.component';

describe('ConfirmBorrowerSummaryComponent', () => {
  let component: ConfirmBorrowerSummaryComponent;
  let fixture: ComponentFixture<ConfirmBorrowerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmBorrowerSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmBorrowerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
