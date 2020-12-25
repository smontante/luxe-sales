import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPropertyInsuranceComponent } from './annual-property-insurance.component';

describe('AnnualPropertyInsuranceComponent', () => {
  let component: AnnualPropertyInsuranceComponent;
  let fixture: ComponentFixture<AnnualPropertyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualPropertyInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPropertyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
