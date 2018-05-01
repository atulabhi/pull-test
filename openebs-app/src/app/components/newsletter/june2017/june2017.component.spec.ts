import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { June2017Component } from './june2017.component';

describe('June2017Component', () => {
  let component: June2017Component;
  let fixture: ComponentFixture<June2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ June2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(June2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
