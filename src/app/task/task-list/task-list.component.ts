import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { TaskState } from 'src/app/store/app.state';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/store/reducers/task.reducer';
import { selectAllTasks } from 'src/app/store/selectors/task.selector';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks$: Observable<Task[]> = of([]);

  constructor(private store: Store<TaskState>) {
  }

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(selectAllTasks));
  }

}
