import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePriceComponent } from './purchase-price.component';

describe('PurchasePriceComponent', () => {
  let component: PurchasePriceComponent;
  let fixture: ComponentFixture<PurchasePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasePriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
