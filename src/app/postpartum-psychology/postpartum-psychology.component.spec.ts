import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpartumPsychologyComponent } from './postpartum-psychology.component';

describe('PostpartumPsychologyComponent', () => {
  let component: PostpartumPsychologyComponent;
  let fixture: ComponentFixture<PostpartumPsychologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostpartumPsychologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpartumPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
