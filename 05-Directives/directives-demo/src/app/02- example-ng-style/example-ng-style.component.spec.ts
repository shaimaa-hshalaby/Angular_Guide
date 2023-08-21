import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgStyleComponent } from './example-ng-style.component';

describe('ExampleNgStyleComponent', () => {
  let component: ExampleNgStyleComponent;
  let fixture: ComponentFixture<ExampleNgStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleNgStyleComponent]
    });
    fixture = TestBed.createComponent(ExampleNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
