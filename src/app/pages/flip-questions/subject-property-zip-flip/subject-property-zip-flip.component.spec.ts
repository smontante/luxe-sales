import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyZipFlipComponent } from './subject-property-zip-flip.component';

describe('SubjectPropertyZipFlipComponent', () => {
  let component: SubjectPropertyZipFlipComponent;
  let fixture: ComponentFixture<SubjectPropertyZipFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyZipFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyZipFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
