import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment1Component } from './assignment1.component';

describe('Assignment1Component', () => {
  let component: Assignment1Component;
  let fixture: ComponentFixture<Assignment1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assignment1Component]
    });
    fixture = TestBed.createComponent(Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
