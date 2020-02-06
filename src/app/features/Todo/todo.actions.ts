import { createAction, props } from '@ngrx/store'

export const TodoTypes = {
  ADD_TASK: '[Todo] Add task',
  INSERT_TASK: '[Todo] Insert task',
}

export const TodoActions = {
  addTask: createAction(TodoTypes.ADD_TASK, props<{ description: string }>()),
  insertTask: createAction(TodoTypes.INSERT_TASK, props<{ id: string, description: string }>()),
}
