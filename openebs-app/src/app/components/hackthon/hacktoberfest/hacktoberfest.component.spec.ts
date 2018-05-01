import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacktoberfestComponent } from './hacktoberfest.component';

describe('HacktoberfestComponent', () => {
  let component: HacktoberfestComponent;
  let fixture: ComponentFixture<HacktoberfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacktoberfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacktoberfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
