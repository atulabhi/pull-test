import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { December2017Component } from './december2017.component';

describe('December2017Component', () => {
  let component: December2017Component;
  let fixture: ComponentFixture<December2017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ December2017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(December2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
