import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyStreetFlipComponent } from './subject-property-street-flip.component';

describe('SubjectPropertyStreetFlipComponent', () => {
  let component: SubjectPropertyStreetFlipComponent;
  let fixture: ComponentFixture<SubjectPropertyStreetFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyStreetFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyStreetFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
