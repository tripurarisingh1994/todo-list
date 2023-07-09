import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, AddTaskComponent, TaskListComponent
  ],
  template: `
    <app-add-task></app-add-task>
    <app-task-list></app-task-list>
  `,
  styles: [
  ]
})
export class TaskComponent {

}
