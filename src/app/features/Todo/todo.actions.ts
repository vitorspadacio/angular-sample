import { createAction, props } from '@ngrx/store'

export const Types = {
  ADD_TASK: '[Todo] Add task',
}

export const Actions = {
  addTask: createAction(Types.ADD_TASK, props<{ description: string }>()),
}
