import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedLoanAmountComponent } from './requested-loan-amount.component';

describe('RequestedLoanAmountComponent', () => {
  let component: RequestedLoanAmountComponent;
  let fixture: ComponentFixture<RequestedLoanAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedLoanAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedLoanAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
