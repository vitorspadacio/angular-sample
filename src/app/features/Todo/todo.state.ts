import { Task } from './todo.model'

export interface TodoState {
  tasks: Task[],
  description: string,
  isInserting: boolean,
}

export const initialState: TodoState = {
  tasks: [
    { id: 1, description: 'TesteA' },
    { id: 2, description: 'TesteB' },
  ],
  description: '',
  isInserting: false,
}
