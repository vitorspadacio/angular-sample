
import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'

import { TodoService } from './todo.service'
import { TodoActions, TodoTypes } from './todo.actions'

@Injectable()
export class TodoEffects {
  addTask = createEffect(() => this.actions$.pipe(
    ofType(TodoTypes.ADD_TASK),
    mergeMap(({ description }: any) => this.todoService.generateGuid()
      .pipe(
        map((guid) => TodoActions.insertTask({ id: guid.toString(), description })),
        catchError(() => EMPTY),
      )),
  ))

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
  ) { }
}
