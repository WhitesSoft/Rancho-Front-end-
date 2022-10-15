import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallemedidorPage } from './detallemedidor.page';

const routes: Routes = [
  {
    path: '',
    component: DetallemedidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallemedidorPageRoutingModule {}
