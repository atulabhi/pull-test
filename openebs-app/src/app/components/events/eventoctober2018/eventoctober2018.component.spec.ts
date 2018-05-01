import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventoctober2018Component } from './eventoctober2018.component';

describe('Eventoctober2018Component', () => {
  let component: Eventoctober2018Component;
  let fixture: ComponentFixture<Eventoctober2018Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventoctober2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventoctober2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
