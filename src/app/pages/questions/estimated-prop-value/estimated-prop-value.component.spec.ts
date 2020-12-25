import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedPropValueComponent } from './estimated-prop-value.component';

describe('EstimatedPropValueComponent', () => {
  let component: EstimatedPropValueComponent;
  let fixture: ComponentFixture<EstimatedPropValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedPropValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedPropValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
