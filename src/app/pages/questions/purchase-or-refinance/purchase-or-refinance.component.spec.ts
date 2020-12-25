import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseOrRefinanceComponent } from './purchase-or-refinance.component';

describe('PurchaseOrRefinanceComponent', () => {
  let component: PurchaseOrRefinanceComponent;
  let fixture: ComponentFixture<PurchaseOrRefinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseOrRefinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseOrRefinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
