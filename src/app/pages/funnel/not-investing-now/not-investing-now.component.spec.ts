import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInvestingNowComponent } from './not-investing-now.component';

describe('NotInvestingNowComponent', () => {
  let component: NotInvestingNowComponent;
  let fixture: ComponentFixture<NotInvestingNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInvestingNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInvestingNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
