import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticastDemoComponent } from './multicast-demo.component';

describe('MulticastDemoComponent', () => {
  let component: MulticastDemoComponent;
  let fixture: ComponentFixture<MulticastDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MulticastDemoComponent]
    });
    fixture = TestBed.createComponent(MulticastDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
