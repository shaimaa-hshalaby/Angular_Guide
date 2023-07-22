import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticHelloWorldComponent } from './automatic-hello-world.component';

describe('AutomaticHelloWorldComponent', () => {
  let component: AutomaticHelloWorldComponent;
  let fixture: ComponentFixture<AutomaticHelloWorldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutomaticHelloWorldComponent]
    });
    fixture = TestBed.createComponent(AutomaticHelloWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
