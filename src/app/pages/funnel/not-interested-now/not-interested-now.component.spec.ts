import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInterestedNowComponent } from './not-interested-now.component';

describe('NotInterestedNowComponent', () => {
  let component: NotInterestedNowComponent;
  let fixture: ComponentFixture<NotInterestedNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInterestedNowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInterestedNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
