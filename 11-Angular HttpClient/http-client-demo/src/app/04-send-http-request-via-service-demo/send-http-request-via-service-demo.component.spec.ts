import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendHttpRequestViaServiceDemoComponent } from './send-http-request-via-service-demo.component';

describe('SendHttpRequestViaServiceDemoComponent', () => {
  let component: SendHttpRequestViaServiceDemoComponent;
  let fixture: ComponentFixture<SendHttpRequestViaServiceDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendHttpRequestViaServiceDemoComponent]
    });
    fixture = TestBed.createComponent(SendHttpRequestViaServiceDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
