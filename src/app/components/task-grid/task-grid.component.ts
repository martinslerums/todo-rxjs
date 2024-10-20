import { Component, inject } from '@angular/core';
import { TaskInfoComponent } from '../task-info/task-info.component';
import { TaskListEmptyComponent } from '../task-list-empty/task-list-empty.component';
import { TaskService } from '../../services/task.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    TaskInfoComponent,
    TaskListEmptyComponent,
    TaskCardComponent,
  ],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss',
  providers: [TaskService],
})
export class TaskGridComponent {
  total = 0;
  completed = 0;

  taskService = inject(TaskService);

  $todos = this.taskService.todo$;

  $completed = this.$todos.subscribe((v) => (this.total = v.length));
  $total = this.taskService.completedTasks$.subscribe(
    (v) => (this.completed = v.length)
  );
}
