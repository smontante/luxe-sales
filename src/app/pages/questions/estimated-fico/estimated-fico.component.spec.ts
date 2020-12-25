import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedFicoComponent } from './estimated-fico.component';

describe('EstimatedFicoComponent', () => {
  let component: EstimatedFicoComponent;
  let fixture: ComponentFixture<EstimatedFicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstimatedFicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedFicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
