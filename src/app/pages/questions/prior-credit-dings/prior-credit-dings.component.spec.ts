import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorCreditDingsComponent } from './prior-credit-dings.component';

describe('PriorCreditDingsComponent', () => {
  let component: PriorCreditDingsComponent;
  let fixture: ComponentFixture<PriorCreditDingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorCreditDingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorCreditDingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
