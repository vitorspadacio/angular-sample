import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { FeaturesRoutes } from './features'

const routes: Routes = [...FeaturesRoutes]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
