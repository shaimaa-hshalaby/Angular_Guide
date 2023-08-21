import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDataWithSpinnerDemoComponent } from './fetch-data-with-spinner-demo.component';

describe('FetchDataWithSpinnerDemoComponent', () => {
  let component: FetchDataWithSpinnerDemoComponent;
  let fixture: ComponentFixture<FetchDataWithSpinnerDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchDataWithSpinnerDemoComponent]
    });
    fixture = TestBed.createComponent(FetchDataWithSpinnerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
