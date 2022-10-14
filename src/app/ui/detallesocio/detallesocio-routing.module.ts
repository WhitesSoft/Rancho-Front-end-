import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesocioPage } from './detallesocio.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesocioPageRoutingModule {}
