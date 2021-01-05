import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceFlipComponent } from './experience-flip.component';

describe('ExperienceFlipComponent', () => {
  let component: ExperienceFlipComponent;
  let fixture: ComponentFixture<ExperienceFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
