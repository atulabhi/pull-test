import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { August2017Component } from './august2017.component';

describe('August2017Component', () => {
  let component: August2017Component;
  let fixture: ComponentFixture<August2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ August2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(August2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
