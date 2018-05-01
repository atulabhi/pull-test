import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { November2017Component } from './november2017.component';

describe('November2017Component', () => {
  let component: November2017Component;
  let fixture: ComponentFixture<November2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ November2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(November2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
