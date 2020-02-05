import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { CommonModule } from '@angular/common'
import { TodoPageComponent } from './todo-page/todo-page.component'

import { TodoReducer } from './todo.reducer'
import { TodoRoutes } from './todo.routes'

@NgModule({
  declarations: [
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(TodoRoutes),
    StoreModule.forFeature('todo', TodoReducer),
  ],
})
export class TodoModule { }
