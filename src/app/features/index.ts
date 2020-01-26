import { Routes } from '@angular/router'

import { TodoPageComponent } from './Todo/todo-page/todo-page.component'

export const FeaturesRoutes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoPageComponent },
]
