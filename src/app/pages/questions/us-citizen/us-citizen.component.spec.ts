import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCitizenComponent } from './us-citizen.component';

describe('UsCitizenComponent', () => {
  let component: UsCitizenComponent;
  let fixture: ComponentFixture<UsCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
