import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformPropertiesDemoComponent } from './ngform-properties-demo.component';

describe('NgformPropertiesDemoComponent', () => {
  let component: NgformPropertiesDemoComponent;
  let fixture: ComponentFixture<NgformPropertiesDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgformPropertiesDemoComponent]
    });
    fixture = TestBed.createComponent(NgformPropertiesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
