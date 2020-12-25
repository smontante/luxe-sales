import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMarketRentsComponent } from './current-market-rents.component';

describe('CurrentMarketRentsComponent', () => {
  let component: CurrentMarketRentsComponent;
  let fixture: ComponentFixture<CurrentMarketRentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentMarketRentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMarketRentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
