import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxableIncomeComponent } from './taxable-income.component';

describe('TaxableIncomeComponent', () => {
  let component: TaxableIncomeComponent;
  let fixture: ComponentFixture<TaxableIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxableIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxableIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
