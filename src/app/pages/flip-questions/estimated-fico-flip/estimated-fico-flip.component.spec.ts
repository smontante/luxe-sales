import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedFicoFlipComponent } from './estimated-fico-flip.component';

describe('EstimatedFicoFlipComponent', () => {
  let component: EstimatedFicoFlipComponent;
  let fixture: ComponentFixture<EstimatedFicoFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedFicoFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedFicoFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
