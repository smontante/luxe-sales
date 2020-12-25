import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedLoanToValueComponent } from './requested-loan-to-value.component';

describe('RequestedLoanToValueComponent', () => {
  let component: RequestedLoanToValueComponent;
  let fixture: ComponentFixture<RequestedLoanToValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedLoanToValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedLoanToValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
