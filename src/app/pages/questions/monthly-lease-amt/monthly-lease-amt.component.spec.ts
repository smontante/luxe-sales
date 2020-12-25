import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyLeaseAmtComponent } from './monthly-lease-amt.component';

describe('MonthlyLeaseAmtComponent', () => {
  let component: MonthlyLeaseAmtComponent;
  let fixture: ComponentFixture<MonthlyLeaseAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyLeaseAmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyLeaseAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
