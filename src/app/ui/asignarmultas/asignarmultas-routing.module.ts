import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarmultasPage } from './asignarmultas.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarmultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarmultasPageRoutingModule {}
