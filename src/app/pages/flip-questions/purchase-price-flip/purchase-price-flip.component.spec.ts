import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePriceFlipComponent } from './purchase-price-flip.component';

describe('PurchasePriceFlipComponent', () => {
  let component: PurchasePriceFlipComponent;
  let fixture: ComponentFixture<PurchasePriceFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePriceFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePriceFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
