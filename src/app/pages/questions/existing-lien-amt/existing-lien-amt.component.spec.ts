import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingLienAmtComponent } from './existing-lien-amt.component';

describe('ExistingLienAmtComponent', () => {
  let component: ExistingLienAmtComponent;
  let fixture: ComponentFixture<ExistingLienAmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingLienAmtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingLienAmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
