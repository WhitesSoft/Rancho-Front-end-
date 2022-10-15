import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearmedidorPage } from './crearmedidor.page';

const routes: Routes = [
  {
    path: '',
    component: CrearmedidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearmedidorPageRoutingModule {}
