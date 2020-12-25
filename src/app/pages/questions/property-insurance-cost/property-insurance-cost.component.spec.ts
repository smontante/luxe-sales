import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyInsuranceCostComponent } from './property-insurance-cost.component';

describe('PropertyInsuranceCostComponent', () => {
  let component: PropertyInsuranceCostComponent;
  let fixture: ComponentFixture<PropertyInsuranceCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyInsuranceCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyInsuranceCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
