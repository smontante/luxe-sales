import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderContractFlipComponent } from './under-contract-flip.component';

describe('UnderContractFlipComponent', () => {
  let component: UnderContractFlipComponent;
  let fixture: ComponentFixture<UnderContractFlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderContractFlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderContractFlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
