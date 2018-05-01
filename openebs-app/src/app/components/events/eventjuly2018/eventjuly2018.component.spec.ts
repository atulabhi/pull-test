import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventjuly2018Component } from './eventjuly2018.component';

describe('Eventjuly2018Component', () => {
  let component: Eventjuly2018Component;
  let fixture: ComponentFixture<Eventjuly2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventjuly2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventjuly2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
