import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualHoaFeesFlipComponent } from './annual-hoa-fees-flip.component';

describe('AnnualHoaFeesFlipComponent', () => {
  let component: AnnualHoaFeesFlipComponent;
  let fixture: ComponentFixture<AnnualHoaFeesFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualHoaFeesFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualHoaFeesFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
