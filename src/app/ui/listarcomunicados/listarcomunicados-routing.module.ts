import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarcomunicadosPage } from './listarcomunicados.page';

const routes: Routes = [
  {
    path: '',
    component: ListarcomunicadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarcomunicadosPageRoutingModule {}
