import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarcomunicadoPage } from './editarcomunicado.page';

const routes: Routes = [
  {
    path: '',
    component: EditarcomunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarcomunicadoPageRoutingModule {}
