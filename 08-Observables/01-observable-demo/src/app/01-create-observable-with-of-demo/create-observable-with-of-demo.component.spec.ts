import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableWithOfDemoComponent } from './create-observable-with-of-demo.component';

describe('CreateObservableWithOfDemoComponent', () => {
  let component: CreateObservableWithOfDemoComponent;
  let fixture: ComponentFixture<CreateObservableWithOfDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObservableWithOfDemoComponent]
    });
    fixture = TestBed.createComponent(CreateObservableWithOfDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
