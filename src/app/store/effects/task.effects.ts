import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { createTask, createTaskFail, createTaskSuccess, getTasks, getTasksFailure, getTasksSuccess } from '../actions/task.action';
import { TaskService } from 'src/app/services/task-service.service';


@Injectable()
export class TaskEffects {

  createTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createTask),
      mergeMap((action) =>
        this.taskService.createTask(action.taskName, action.description).pipe(
          // tap(res => console.log(res)),
          map((res:any) => createTaskSuccess(res)),
          catchError((error) => of(createTaskFail({ error: error.message })))
        )
      )
    )
  );

  getTasks$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getTasks),
    mergeMap(() =>
      this.taskService.getTask().pipe(
      //  tap(res => console.log(res)),        
        map((res:any) => getTasksSuccess(res)),
        catchError((error) => of(getTasksFailure({ error })))
      )
    )
  )
);


  constructor(private actions$: Actions, private taskService: TaskService) {}
}
