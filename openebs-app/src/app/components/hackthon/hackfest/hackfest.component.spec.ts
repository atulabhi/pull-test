import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackfestComponent } from './hackfest.component';

describe('HackfestComponent', () => {
  let component: HackfestComponent;
  let fixture: ComponentFixture<HackfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
