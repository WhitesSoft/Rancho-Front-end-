import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleusuarioPage } from './detalleusuario.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleusuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleusuarioPageRoutingModule {}
