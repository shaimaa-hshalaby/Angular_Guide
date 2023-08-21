import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVariablesComponent } from './template-variables.component';

describe('TemplateVariablesComponent', () => {
  let component: TemplateVariablesComponent;
  let fixture: ComponentFixture<TemplateVariablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateVariablesComponent]
    });
    fixture = TestBed.createComponent(TemplateVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
