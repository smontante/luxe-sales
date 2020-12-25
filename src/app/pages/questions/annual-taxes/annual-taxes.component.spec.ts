import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualTaxesComponent } from './annual-taxes.component';

describe('AnnualTaxesComponent', () => {
  let component: AnnualTaxesComponent;
  let fixture: ComponentFixture<AnnualTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
