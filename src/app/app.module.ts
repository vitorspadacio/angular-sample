import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreModule } from '@ngrx/store'

import { AppComponent } from './app.component'
import { TodoModule } from './features/Todo/todo.module'

import { environment } from '../environments/environment'

const rootRoutes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
]

const storeConfig = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
  },
}

const devToolsConfig = { maxAge: 25, logOnly: environment.production }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes),
    StoreModule.forRoot({}, storeConfig),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(devToolsConfig),
    TodoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
