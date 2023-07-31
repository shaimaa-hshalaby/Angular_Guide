import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableWithIntervalDemoComponent } from './create-observable-with-interval-demo.component';

describe('CreateObservableWithIntervalDemoComponent', () => {
  let component: CreateObservableWithIntervalDemoComponent;
  let fixture: ComponentFixture<CreateObservableWithIntervalDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObservableWithIntervalDemoComponent]
    });
    fixture = TestBed.createComponent(CreateObservableWithIntervalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
