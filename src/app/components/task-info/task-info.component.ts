import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.scss',
})
export class TaskInfoComponent {
  @Input({ required: true }) isBoth: boolean = false;
  @Input({ required: true }) total: number = 0;
  @Input() completed: number = 0;
  @Input({ required: true }) label: string = '';
}
