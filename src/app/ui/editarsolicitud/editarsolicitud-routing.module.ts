import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarsolicitudPage } from './editarsolicitud.page';

const routes: Routes = [
  {
    path: '',
    component: EditarsolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarsolicitudPageRoutingModule {}
