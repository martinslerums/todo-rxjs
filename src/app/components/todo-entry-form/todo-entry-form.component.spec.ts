import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoEntryFormComponent } from './todo-entry-form.component';

describe('TodoEntryFormComponent', () => {
  let component: TodoEntryFormComponent;
  let fixture: ComponentFixture<TodoEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoEntryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
