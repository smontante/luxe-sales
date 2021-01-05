import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualInsuraceFlipComponent } from './annual-insurace-flip.component';

describe('AnnualInsuraceFlipComponent', () => {
  let component: AnnualInsuraceFlipComponent;
  let fixture: ComponentFixture<AnnualInsuraceFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnualInsuraceFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualInsuraceFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
