import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationDemoComponent } from './custom-validation-demo.component';

describe('CustomValidationDemoComponent', () => {
  let component: CustomValidationDemoComponent;
  let fixture: ComponentFixture<CustomValidationDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomValidationDemoComponent]
    });
    fixture = TestBed.createComponent(CustomValidationDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
