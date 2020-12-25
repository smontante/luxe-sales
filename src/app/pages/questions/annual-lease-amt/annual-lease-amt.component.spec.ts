import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualLeaseAmtComponent } from './annual-lease-amt.component';

describe('AnnualLeaseAmtComponent', () => {
  let component: AnnualLeaseAmtComponent;
  let fixture: ComponentFixture<AnnualLeaseAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualLeaseAmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualLeaseAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
