import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { September2017Component } from './september2017.component';

describe('September2017Component', () => {
  let component: September2017Component;
  let fixture: ComponentFixture<September2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ September2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(September2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
