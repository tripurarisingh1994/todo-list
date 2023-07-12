import { createAction, props } from '@ngrx/store';


export const createTask = createAction(
  '[Tasks] Create Task',
  props<{ taskName: string; description: string }>()
);

export const createTaskSuccess = createAction(
  '[Tasks] Create Task Success',
  props<any>()
);
export const createTaskFail = createAction(
  '[Tasks] Create Task Fail',
   props<{ error: string }>()
);

// Get 

export const getTasks = createAction(
  '[Tasks] Get Task'
);

export const getTasksSuccess = createAction(
  '[Tasks] Get Task Success',
  props<any>()
);

export const getTasksFailure = createAction(
  '[Task] Get Tasks Failure',
   props<{ error: any }>()
);

