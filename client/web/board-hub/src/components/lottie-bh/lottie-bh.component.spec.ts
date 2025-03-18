import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieBhComponent } from './lottie-bh.component';

describe('LottieBhComponent', () => {
  let component: LottieBhComponent;
  let fixture: ComponentFixture<LottieBhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LottieBhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LottieBhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
