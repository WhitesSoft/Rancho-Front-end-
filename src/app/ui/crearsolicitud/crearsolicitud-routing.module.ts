import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearsolicitudPage } from './crearsolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: CrearsolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearsolicitudPageRoutingModule {}
