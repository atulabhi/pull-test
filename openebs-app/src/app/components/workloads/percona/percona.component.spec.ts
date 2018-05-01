import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerconaComponent } from './percona.component';

describe('PerconaComponent', () => {
  let component: PerconaComponent;
  let fixture: ComponentFixture<PerconaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerconaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerconaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
