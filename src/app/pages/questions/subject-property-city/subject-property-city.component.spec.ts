import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyCityComponent } from './subject-property-city.component';

describe('SubjectPropertyCityComponent', () => {
  let component: SubjectPropertyCityComponent;
  let fixture: ComponentFixture<SubjectPropertyCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
