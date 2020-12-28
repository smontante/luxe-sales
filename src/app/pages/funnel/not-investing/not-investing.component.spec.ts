import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInvestingComponent } from './not-investing.component';

describe('NotInvestingComponent', () => {
  let component: NotInvestingComponent;
  let fixture: ComponentFixture<NotInvestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInvestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInvestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
