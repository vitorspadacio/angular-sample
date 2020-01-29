import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { reducers } from './features/reducers'

import { TodoPageComponent } from './features/Todo/todo-page/todo-page.component'
import { environment } from '../environments/environment'

@NgModule({
  declarations: [
    AppComponent,
    TodoPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
