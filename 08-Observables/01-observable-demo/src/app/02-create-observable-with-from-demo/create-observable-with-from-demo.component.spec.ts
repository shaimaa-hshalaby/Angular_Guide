import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateObservableWithFromDemoComponent } from './create-observable-with-from-demo.component';

describe('CreateObservableWithFromDemoComponent', () => {
  let component: CreateObservableWithFromDemoComponent;
  let fixture: ComponentFixture<CreateObservableWithFromDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateObservableWithFromDemoComponent]
    });
    fixture = TestBed.createComponent(CreateObservableWithFromDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
