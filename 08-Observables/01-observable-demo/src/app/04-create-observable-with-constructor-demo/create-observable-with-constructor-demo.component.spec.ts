import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableWithConstructorDemoComponent } from './create-observable-with-constructor-demo.component';

describe('CreateObservableWithConstructorDemoComponent', () => {
  let component: CreateObservableWithConstructorDemoComponent;
  let fixture: ComponentFixture<CreateObservableWithConstructorDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObservableWithConstructorDemoComponent]
    });
    fixture = TestBed.createComponent(CreateObservableWithConstructorDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
