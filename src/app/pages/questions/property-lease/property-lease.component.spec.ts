import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyLeaseComponent } from './property-lease.component';

describe('PropertyLeaseComponent', () => {
  let component: PropertyLeaseComponent;
  let fixture: ComponentFixture<PropertyLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyLeaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
