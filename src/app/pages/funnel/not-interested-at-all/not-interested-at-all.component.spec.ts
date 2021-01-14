import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInterestedAtAllComponent } from './not-interested-at-all.component';

describe('NotInterestedAtAllComponent', () => {
  let component: NotInterestedAtAllComponent;
  let fixture: ComponentFixture<NotInterestedAtAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInterestedAtAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInterestedAtAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
