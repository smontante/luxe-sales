import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMonthlyDepComponent } from './avg-monthly-dep.component';

describe('AvgMonthlyDepComponent', () => {
  let component: AvgMonthlyDepComponent;
  let fixture: ComponentFixture<AvgMonthlyDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgMonthlyDepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgMonthlyDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
