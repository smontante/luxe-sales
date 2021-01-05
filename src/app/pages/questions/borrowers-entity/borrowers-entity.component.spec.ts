import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowersEntityComponent } from './borrowers-entity.component';

describe('BorrowersEntityComponent', () => {
  let component: BorrowersEntityComponent;
  let fixture: ComponentFixture<BorrowersEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowersEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowersEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
