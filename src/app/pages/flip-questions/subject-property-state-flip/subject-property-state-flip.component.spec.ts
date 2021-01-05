import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyStateFlipComponent } from './subject-property-state-flip.component';

describe('SubjectPropertyStateFlipComponent', () => {
  let component: SubjectPropertyStateFlipComponent;
  let fixture: ComponentFixture<SubjectPropertyStateFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyStateFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyStateFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
