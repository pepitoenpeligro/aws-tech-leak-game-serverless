import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBhComponent } from './input-bh.component';

describe('InputComponent', () => {
  let component: InputBhComponent;
  let fixture: ComponentFixture<InputBhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBhComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
