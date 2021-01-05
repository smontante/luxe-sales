import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLeaseFlipComponent } from './active-lease-flip.component';

describe('ActiveLeaseFlipComponent', () => {
  let component: ActiveLeaseFlipComponent;
  let fixture: ComponentFixture<ActiveLeaseFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveLeaseFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveLeaseFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
