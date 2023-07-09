// import {createAction, props} from "@ngrx/store";
// import {TaskState} from "../app.state";

// export const TASK_CREATE = '[Add Task Component] Create';
// export const TASK_UPDATE = '[Add Task Component] Update';
// export const TASK_DELETE = '[Add Task Component] Delete';

// export const taskCreate = createAction(
//   TASK_CREATE,
//   props<TaskState>()
//   );
// export const taskUpdate = createAction(TASK_UPDATE)
// export const taskDelete = createAction(TASK_DELETE)


import { createAction, props } from '@ngrx/store';

export const createTask = createAction(
  '[Tasks] Create Task',
  props<{ taskName: string; description: string }>()
);

export const createTaskSuccess = createAction(
  '[Tasks] Create Task Success'
);
export const createTaskFail = createAction(
  '[Tasks] Create Task Fail',
   props<{ error: string }>()
);