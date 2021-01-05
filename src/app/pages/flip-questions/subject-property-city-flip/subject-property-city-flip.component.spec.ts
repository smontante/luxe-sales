import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyCityFlipComponent } from './subject-property-city-flip.component';

describe('SubjectPropertyCityFlipComponent', () => {
  let component: SubjectPropertyCityFlipComponent;
  let fixture: ComponentFixture<SubjectPropertyCityFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyCityFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyCityFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
