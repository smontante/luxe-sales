import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPropertyTaxesFlipComponent } from './annual-property-taxes-flip.component';

describe('AnnualPropertyTaxesFlipComponent', () => {
  let component: AnnualPropertyTaxesFlipComponent;
  let fixture: ComponentFixture<AnnualPropertyTaxesFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualPropertyTaxesFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPropertyTaxesFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
