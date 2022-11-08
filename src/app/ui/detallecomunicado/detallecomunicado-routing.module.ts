import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallecomunicadoPage } from './detallecomunicado.page';

const routes: Routes = [
  {
    path: '',
    component: DetallecomunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallecomunicadoPageRoutingModule {}
