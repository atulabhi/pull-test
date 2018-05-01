import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hangout2Component } from './hangout2.component';

describe('Hangout2Component', () => {
  let component: Hangout2Component;
  let fixture: ComponentFixture<Hangout2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hangout2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hangout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
