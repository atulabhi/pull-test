import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventfebruary2018Component } from './eventfebruary2018.component';

describe('Eventfebruary2018Component', () => {
  let component: Eventfebruary2018Component;
  let fixture: ComponentFixture<Eventfebruary2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventfebruary2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventfebruary2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
