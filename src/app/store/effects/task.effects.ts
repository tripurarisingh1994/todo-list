import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { createTask, createTaskFail, createTaskSuccess } from '../actions/task.action';
import { TaskService } from 'src/app/services/task-service.service';


@Injectable()
export class TaskEffects {
  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      mergeMap((action) =>
        this.taskService.createTask(action.taskName, action.description).pipe(
          map(() => createTaskSuccess()),
          catchError((error) => of(createTaskFail({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private taskService: TaskService) {}
}
