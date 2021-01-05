import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedValueFlipComponent } from './estimated-value-flip.component';

describe('EstimatedValueFlipComponent', () => {
  let component: EstimatedValueFlipComponent;
  let fixture: ComponentFixture<EstimatedValueFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedValueFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedValueFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
