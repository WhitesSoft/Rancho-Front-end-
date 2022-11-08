import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearcomunicadoPage } from './crearcomunicado.page';

const routes: Routes = [
  {
    path: '',
    component: CrearcomunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearcomunicadoPageRoutingModule {}
