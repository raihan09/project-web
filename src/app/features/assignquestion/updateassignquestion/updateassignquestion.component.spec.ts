import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateassignquestionComponent } from './updateassignquestion.component';

describe('UpdateassignquestionComponent', () => {
  let component: UpdateassignquestionComponent;
  let fixture: ComponentFixture<UpdateassignquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateassignquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateassignquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
