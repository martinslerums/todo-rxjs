import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-entry-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-entry-form.component.html',
  styleUrl: './todo-entry-form.component.scss',
})
export class TodoEntryFormComponent {
  private readonly taskService = inject(TaskService);
  title: string = '';

  todos$ = this.taskService.todo$;

  addTask() {
    if (!this.title) return;

    this.taskService.addTask({
      title: this.title,
      completed: false,
    });

    this.title = '';
  }
}
