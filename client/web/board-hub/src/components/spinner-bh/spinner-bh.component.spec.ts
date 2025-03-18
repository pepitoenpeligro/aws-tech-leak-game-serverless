import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerBhComponent } from './spinner-bh.component';

describe('SpinnerBhComponent', () => {
  let component: SpinnerBhComponent;
  let fixture: ComponentFixture<SpinnerBhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerBhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerBhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
