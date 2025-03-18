import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBhComponent } from './button-bh.component';

describe('ButtonBhComponent', () => {
  let component: ButtonBhComponent;
  let fixture: ComponentFixture<ButtonBhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
