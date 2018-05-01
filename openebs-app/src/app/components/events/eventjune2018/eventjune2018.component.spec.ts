import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventjune2018Component } from './eventjune2018.component';

describe('Eventjune2018Component', () => {
  let component: Eventjune2018Component;
  let fixture: ComponentFixture<Eventjune2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventjune2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventjune2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
