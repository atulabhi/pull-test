import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { October2017Component } from './october2017.component';

describe('October2017Component', () => {
  let component: October2017Component;
  let fixture: ComponentFixture<October2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ October2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(October2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
