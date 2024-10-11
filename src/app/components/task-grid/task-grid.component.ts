import { Component } from '@angular/core';
import { TaskInfoComponent } from "../task-info/task-info.component";
import { TaskListComponent } from "../task-list/task-list.component";
import { TaskListEmptyComponent } from "../task-list-empty/task-list-empty.component";

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [TaskInfoComponent, TaskListComponent, TaskListEmptyComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})
export class TaskGridComponent {

}
