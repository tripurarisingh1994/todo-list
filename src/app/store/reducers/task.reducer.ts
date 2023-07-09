// import {createReducer, on} from "@ngrx/store";
// import {taskCreate, taskDelete, taskUpdate} from "../actions/task.action";

// export const initialState = {}

// export const taskReducer = createReducer(
//   initialState,
//   on(taskCreate, (state,action) => {
//     return {
//       ...state,
//       ...action
//     }
//   }),
//   on(taskUpdate, (state) => {

//     return {
//       ...state
//     }
//   }),
//   on(taskDelete, (state) => {
//     return {
//       ...state
//     }
//   })
// )

import { createReducer, on } from '@ngrx/store';
import { createTask, createTaskFail, createTaskSuccess } from '../actions/task.action';

export interface Task  {
    taskName: string;
    description: string;
}

export interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
}

export const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null
};

export const taskReducer = createReducer(
  initialState,
  on(createTask, (state, { taskName, description }) => {
    // Handle the createTask action
    // You can update the state, such as setting a loading flag
 
    const newTask = [...state.tasks, {taskName, description}]
    console.log(newTask)

    return { ...state, tasks: newTask /* update the state properties as needed */ };
  }),
  on(createTaskSuccess, (state) => {
    // Handle the createTaskSuccess action
    // Update the state to reflect the successful task creation

    return { ...state, /* update the state properties as needed */ };
  }),
  on(createTaskFail, (state, { error }) => {
    // Handle the createTaskFail action
    // Update the state to handle the failure, such as displaying an error message

    return { ...state, /* update the state properties as needed */ };
  })
);


