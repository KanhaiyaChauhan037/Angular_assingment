import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastComponent } from './tast.component';

describe('TastComponent', () => {
  let component: TastComponent;
  let fixture: ComponentFixture<TastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TastComponent]
    });
    fixture = TestBed.createComponent(TastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
