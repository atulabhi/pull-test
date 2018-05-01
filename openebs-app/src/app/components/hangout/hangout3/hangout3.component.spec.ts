import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangout3Component } from './hangout3.component';

describe('Hangout3Component', () => {
  let component: Hangout3Component;
  let fixture: ComponentFixture<Hangout3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangout3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
