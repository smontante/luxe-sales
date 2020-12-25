import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDateComponent } from './target-date.component';

describe('TargetDateComponent', () => {
  let component: TargetDateComponent;
  let fixture: ComponentFixture<TargetDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
