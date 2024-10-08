import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListEmptyComponent } from './task-list-empty.component';

describe('TaskListEmptyComponent', () => {
  let component: TaskListEmptyComponent;
  let fixture: ComponentFixture<TaskListEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListEmptyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
