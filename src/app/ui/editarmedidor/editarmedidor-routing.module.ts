import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarmedidorPage } from './editarmedidor.page';

const routes: Routes = [
  {
    path: '',
    component: EditarmedidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarmedidorPageRoutingModule {}
