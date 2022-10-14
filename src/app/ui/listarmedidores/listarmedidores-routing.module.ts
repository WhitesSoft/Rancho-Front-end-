import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarmedidoresPage } from './listarmedidores.page';

const routes: Routes = [
  {
    path: '',
    component: ListarmedidoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarmedidoresPageRoutingModule {}
