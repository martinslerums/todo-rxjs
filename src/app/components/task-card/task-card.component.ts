import { Component, inject, Input } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  private readonly taskService: TaskService = inject(TaskService);

  @Input({ required: true }) task: ITask | undefined;

  completeTask(id?: number) {
    if (!id) return;
    this.taskService.completeTask(id);
  }

  deleteTask(id?: number) {
    if (!id) return;
    this.taskService.deleteTask(id)
  }
}
