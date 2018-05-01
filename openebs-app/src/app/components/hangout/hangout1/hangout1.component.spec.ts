import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangout1Component } from './hangout1.component';

describe('Hangout1Component', () => {
  let component: Hangout1Component;
  let fixture: ComponentFixture<Hangout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
