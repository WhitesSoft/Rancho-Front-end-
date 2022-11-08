import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesolicitudPage } from './detallesolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesolicitudPageRoutingModule {}
