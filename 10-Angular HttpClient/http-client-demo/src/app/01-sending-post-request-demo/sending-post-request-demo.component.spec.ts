import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingPostRequestDemoComponent } from './sending-post-request-demo.component';

describe('SendingPostRequestDemoComponent', () => {
  let component: SendingPostRequestDemoComponent;
  let fixture: ComponentFixture<SendingPostRequestDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendingPostRequestDemoComponent]
    });
    fixture = TestBed.createComponent(SendingPostRequestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
