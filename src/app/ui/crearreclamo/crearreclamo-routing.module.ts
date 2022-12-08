import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearreclamoPage } from './crearreclamo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearreclamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearreclamoPageRoutingModule {}
