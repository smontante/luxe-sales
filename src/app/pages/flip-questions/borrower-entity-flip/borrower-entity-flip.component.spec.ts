import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerEntityFlipComponent } from './borrower-entity-flip.component';

describe('BorrowerEntityFlipComponent', () => {
  let component: BorrowerEntityFlipComponent;
  let fixture: ComponentFixture<BorrowerEntityFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowerEntityFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowerEntityFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
