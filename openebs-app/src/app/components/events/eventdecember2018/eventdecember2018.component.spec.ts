import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventdecember2018Component } from './eventdecember2018.component';

describe('Eventdecember2018Component', () => {
  let component: Eventdecember2018Component;
  let fixture: ComponentFixture<Eventdecember2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventdecember2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventdecember2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
