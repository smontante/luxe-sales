import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualHoaFeesComponent } from './annual-hoa-fees.component';

describe('AnnualHoaFeesComponent', () => {
  let component: AnnualHoaFeesComponent;
  let fixture: ComponentFixture<AnnualHoaFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualHoaFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualHoaFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
