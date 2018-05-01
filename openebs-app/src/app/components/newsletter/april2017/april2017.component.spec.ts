import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { April2017Component } from './april2017.component';

describe('April2017Component', () => {
  let component: April2017Component;
  let fixture: ComponentFixture<April2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ April2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(April2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
