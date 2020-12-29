import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectPropertyZipComponent } from './subject-property-zip.component';

describe('SubjectPropertyZipComponent', () => {
  let component: SubjectPropertyZipComponent;
  let fixture: ComponentFixture<SubjectPropertyZipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectPropertyZipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectPropertyZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
