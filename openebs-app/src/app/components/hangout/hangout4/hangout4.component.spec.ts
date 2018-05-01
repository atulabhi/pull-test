import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangout4Component } from './hangout4.component';

describe('Hangout4Component', () => {
  let component: Hangout4Component;
  let fixture: ComponentFixture<Hangout4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangout4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangout4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
