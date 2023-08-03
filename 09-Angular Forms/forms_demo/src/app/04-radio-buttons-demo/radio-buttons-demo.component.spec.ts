import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsDemoComponent } from './radio-buttons-demo.component';

describe('RadioButtonsDemoComponent', () => {
  let component: RadioButtonsDemoComponent;
  let fixture: ComponentFixture<RadioButtonsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonsDemoComponent]
    });
    fixture = TestBed.createComponent(RadioButtonsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
