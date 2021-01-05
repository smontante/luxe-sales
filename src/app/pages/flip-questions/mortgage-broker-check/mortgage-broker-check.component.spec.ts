import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageBrokerCheckComponent } from './mortgage-broker-check.component';

describe('MortgageBrokerCheckComponent', () => {
  let component: MortgageBrokerCheckComponent;
  let fixture: ComponentFixture<MortgageBrokerCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MortgageBrokerCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageBrokerCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
