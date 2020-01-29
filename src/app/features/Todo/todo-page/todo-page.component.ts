import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { TodoState } from '../todo.state'
import { Task } from '../todo.model'
import { Actions } from '../todo.actions'

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent {
  tasks$: Observable<Task[]>

  constructor(private store: Store<{ todo: TodoState }>) {
    this.tasks$ = store.pipe(select((state) => state.todo.tasks))
  }

  description = new FormControl('')

  handleAddClick() {
    this.store.dispatch(Actions.addTask({ description: this.description.value }))
  }
}
