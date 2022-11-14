import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcobroPage } from './crearcobro.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcobroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcobroPageRoutingModule {}
