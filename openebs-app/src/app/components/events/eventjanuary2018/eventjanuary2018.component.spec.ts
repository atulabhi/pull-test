import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventjanuary2018Component } from './eventjanuary2018.component';

describe('Eventjanuary2018Component', () => {
  let component: Eventjanuary2018Component;
  let fixture: ComponentFixture<Eventjanuary2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventjanuary2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventjanuary2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
