import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalResidenceComponent } from './personal-residence.component';

describe('PersonalResidenceComponent', () => {
  let component: PersonalResidenceComponent;
  let fixture: ComponentFixture<PersonalResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
