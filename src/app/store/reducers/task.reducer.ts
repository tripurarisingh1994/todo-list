import { createReducer, on } from '@ngrx/store';
import { createTask, createTaskFail, createTaskSuccess, getTasks, getTasksFailure, getTasksSuccess } from '../actions/task.action';

export interface Task {
  id?: number;
  taskName: string;
  description: string;
  user_id?: number;
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
  on(createTask, (state, { taskName, description }) => ({
    ...state,
    taskName,
    description,
    loading: true,
    error: null,
  })),
  on(createTaskSuccess, (state, { tasks }) => ({
    ...state,
    tasks: [...state.tasks, ...tasks],
    loading: false,
    error: null,
  })),
  on(createTaskFail, (state, { error }) => ({
    ...state,
    tasks: [],
    loading: false,
    error,
  })),
  on(getTasks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(getTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    loading: false,
    error: null,
  })),
  on(getTasksFailure, (state, { error }) => ({
    ...state,
    tasks: [],
    loading: false,
    error,
  }))
);


