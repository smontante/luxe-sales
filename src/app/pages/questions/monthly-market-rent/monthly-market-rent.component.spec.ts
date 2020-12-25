import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMarketRentComponent } from './monthly-market-rent.component';

describe('MonthlyMarketRentComponent', () => {
  let component: MonthlyMarketRentComponent;
  let fixture: ComponentFixture<MonthlyMarketRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyMarketRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMarketRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
