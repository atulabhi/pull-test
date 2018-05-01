import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { July2017Component } from './july2017.component';

describe('July2017Component', () => {
  let component: July2017Component;
  let fixture: ComponentFixture<July2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ July2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(July2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
