import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageLatesComponent } from './mortgage-lates.component';

describe('MortgageLatesComponent', () => {
  let component: MortgageLatesComponent;
  let fixture: ComponentFixture<MortgageLatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageLatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageLatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
