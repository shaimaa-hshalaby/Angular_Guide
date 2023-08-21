import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDeleteRequestDemoComponent } from './send-delete-request-demo.component';

describe('SendDeleteRequestDemoComponent', () => {
  let component: SendDeleteRequestDemoComponent;
  let fixture: ComponentFixture<SendDeleteRequestDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendDeleteRequestDemoComponent]
    });
    fixture = TestBed.createComponent(SendDeleteRequestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
