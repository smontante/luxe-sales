import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyStateComponent } from './subject-property-state.component';

describe('SubjectPropertyStateComponent', () => {
  let component: SubjectPropertyStateComponent;
  let fixture: ComponentFixture<SubjectPropertyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
