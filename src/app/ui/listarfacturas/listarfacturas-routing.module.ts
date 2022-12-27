import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarfacturasPage } from './listarfacturas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarfacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarfacturasPageRoutingModule {}
