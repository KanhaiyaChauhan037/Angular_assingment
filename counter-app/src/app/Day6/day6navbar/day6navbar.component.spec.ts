import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day6navbarComponent } from './day6navbar.component';

describe('Day6navbarComponent', () => {
  let component: Day6navbarComponent;
  let fixture: ComponentFixture<Day6navbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Day6navbarComponent]
    });
    fixture = TestBed.createComponent(Day6navbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
