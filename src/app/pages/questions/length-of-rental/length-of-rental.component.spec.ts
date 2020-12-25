import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthOfRentalComponent } from './length-of-rental.component';

describe('LengthOfRentalComponent', () => {
  let component: LengthOfRentalComponent;
  let fixture: ComponentFixture<LengthOfRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthOfRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthOfRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
