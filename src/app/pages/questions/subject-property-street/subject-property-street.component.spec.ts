import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyStreetComponent } from './subject-property-street.component';

describe('SubjectPropertyStreetComponent', () => {
  let component: SubjectPropertyStreetComponent;
  let fixture: ComponentFixture<SubjectPropertyStreetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyStreetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyStreetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
