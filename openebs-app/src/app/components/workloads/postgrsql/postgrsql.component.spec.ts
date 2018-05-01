import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgrsqlComponent } from './postgrsql.component';

describe('PostgrsqlComponent', () => {
  let component: PostgrsqlComponent;
  let fixture: ComponentFixture<PostgrsqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostgrsqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostgrsqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
