// import {AppState, TaskState} from "../app.state";
// import {createSelector} from "@ngrx/store";

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TaskState } from "../reducers/task.reducer";


// export const selectTaskFeature = (state: AppState) => state.task;


// export const selectTask = createSelector(
//   selectTaskFeature,
//   (state) => {
//     console.log(state)

//     return {
//       ...state
//     }
//   }
// )


export const selectTaskState = createFeatureSelector<TaskState>('tasks');

export const selectAllTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.tasks
);

