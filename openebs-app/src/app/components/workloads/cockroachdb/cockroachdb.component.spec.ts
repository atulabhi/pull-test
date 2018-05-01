import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CockroachdbComponent } from './cockroachdb.component';

describe('CockroachdbComponent', () => {
  let component: CockroachdbComponent;
  let fixture: ComponentFixture<CockroachdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CockroachdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CockroachdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
