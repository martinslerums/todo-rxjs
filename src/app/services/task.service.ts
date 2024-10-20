import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ITask, ITaskPayload } from '../interfaces/ITask';
import { tasks } from '../utils/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  todos: ITask[] = tasks;

  private todosSubject: BehaviorSubject<ITask[]> = new BehaviorSubject<ITask[]>(
    this.todos
  );

  public todo$ = this.todosSubject.asObservable();

  public completedTasks$: Observable<ITask[]> = this.todo$.pipe(
    map((tasks) => tasks.filter((task) => task.completed))
  );

  constructor() {}

  addTask(task: ITaskPayload) {
    if (task) {
      const newTask: ITask = {
        id: this.todos.length + 1,
        ...task,
      };
      this.todos.push(newTask);
      this.todosSubject.next(this.todos);
    }
  }

  completeTask(id: number) {
    const task = this.todos.find((task) => task.id === id);
    if (!task) return;

    this.updateTask({ ...task, completed: !task.completed });
  }

  updateTask(updatedTask: ITask) {
    const tasks = this.todosSubject.value.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this.updateTasks(tasks);
  }

  updateTasks(tasks: ITask[]) {
    this.todos = tasks;
    this.todosSubject.next(this.todos);
  }

  deleteTask(id: number) {
    const tasks = this.todos.filter((task) => task.id !== id);
    this.todos = tasks;

    this.updateTasks(tasks);
  }
}
