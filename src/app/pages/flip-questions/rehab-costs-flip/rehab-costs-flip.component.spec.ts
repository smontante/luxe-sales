import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabCostsFlipComponent } from './rehab-costs-flip.component';

describe('RehabCostsFlipComponent', () => {
  let component: RehabCostsFlipComponent;
  let fixture: ComponentFixture<RehabCostsFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehabCostsFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabCostsFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
