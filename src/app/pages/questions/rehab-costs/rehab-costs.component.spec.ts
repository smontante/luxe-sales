import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehabCostsComponent } from './rehab-costs.component';

describe('RehabCostsComponent', () => {
  let component: RehabCostsComponent;
  let fixture: ComponentFixture<RehabCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehabCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
