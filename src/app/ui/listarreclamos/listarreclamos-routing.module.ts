import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarreclamosPage } from './listarreclamos.page';

const routes: Routes = [
  {
    path: '',
    component: ListarreclamosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarreclamosPageRoutingModule {}
