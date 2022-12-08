import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallereclamoPage } from './detallereclamo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallereclamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallereclamoPageRoutingModule {}
