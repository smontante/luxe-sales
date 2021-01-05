import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalExperienceFlipComponent } from './rental-experience-flip.component';

describe('RentalExperienceFlipComponent', () => {
  let component: RentalExperienceFlipComponent;
  let fixture: ComponentFixture<RentalExperienceFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentalExperienceFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalExperienceFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
