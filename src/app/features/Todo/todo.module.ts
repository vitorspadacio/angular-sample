import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'

import { TodoReducer } from './todo.reducer'
import { TodoRoutes } from './todo.routes'
import { TodoEffects } from './todo.effects'

import { TodoPageComponent } from './todo-page/todo-page.component'

@NgModule({
  declarations: [
    TodoPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(TodoRoutes),
    StoreModule.forFeature('todo', TodoReducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoModule { }
