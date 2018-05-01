import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventapril2018Component } from './eventapril2018.component';

describe('Eventapril2018Component', () => {
  let component: Eventapril2018Component;
  let fixture: ComponentFixture<Eventapril2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventapril2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventapril2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
