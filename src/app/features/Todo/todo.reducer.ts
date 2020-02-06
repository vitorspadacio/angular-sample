import { Action, createReducer, on } from '@ngrx/store'
import { TodoState, initialState } from './todo.state'
import { TodoActions } from './todo.actions'

const insertTask = (state: TodoState, { id, description }) => (
  { ...state, tasks: [...state.tasks, { id, description }] })

const reducer = createReducer(
  initialState,
  on(TodoActions.insertTask, insertTask),
)

export function TodoReducer(
  state: TodoState | undefined,
  action: Action,
): TodoState {
  return reducer(state, action)
}
