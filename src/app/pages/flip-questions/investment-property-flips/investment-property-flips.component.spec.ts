import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentPropertyFlipsComponent } from './investment-property-flips.component';

describe('InvestmentPropertyFlipsComponent', () => {
  let component: InvestmentPropertyFlipsComponent;
  let fixture: ComponentFixture<InvestmentPropertyFlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentPropertyFlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentPropertyFlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
