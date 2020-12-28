import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingChannelComponent } from './marketing-channel.component';

describe('MarketingChannelComponent', () => {
  let component: MarketingChannelComponent;
  let fixture: ComponentFixture<MarketingChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
