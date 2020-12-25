import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumOfUnitsComponent } from './num-of-units.component';

describe('NumOfUnitsComponent', () => {
  let component: NumOfUnitsComponent;
  let fixture: ComponentFixture<NumOfUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumOfUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumOfUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
