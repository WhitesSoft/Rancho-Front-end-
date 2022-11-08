import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicadosglobalPage } from './comunicadosglobal.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicadosglobalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicadosglobalPageRoutingModule {}
