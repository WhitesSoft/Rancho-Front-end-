import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearconsumoPage } from './crearconsumo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearconsumoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearconsumoPageRoutingModule {}
