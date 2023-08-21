import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingGetRequestDemoComponent } from './sending-get-request-demo.component';

describe('SendingGetRequestDemoComponent', () => {
  let component: SendingGetRequestDemoComponent;
  let fixture: ComponentFixture<SendingGetRequestDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendingGetRequestDemoComponent]
    });
    fixture = TestBed.createComponent(SendingGetRequestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
