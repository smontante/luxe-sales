import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerSummaryComponent } from './borrower-summary.component';

describe('BorrowerSummaryComponent', () => {
  let component: BorrowerSummaryComponent;
  let fixture: ComponentFixture<BorrowerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
