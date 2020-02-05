import { Action, createReducer, on } from '@ngrx/store'
import { TodoState, initialState } from './todo.state'
import { Actions } from './todo.actions'

const addTask = (state: TodoState, { description }) => {
  const newId = state.tasks[state.tasks.length - 1].id + 1

  const newTask = {
    id: newId,
    description,
  }

  return { ...state, tasks: [...state.tasks, newTask] }
}

const reducer = createReducer(
  initialState,
  on(Actions.addTask, addTask),
)

export function TodoReducer(
  state: TodoState | undefined,
  action: Action,
): TodoState {
  return reducer(state, action)
}
