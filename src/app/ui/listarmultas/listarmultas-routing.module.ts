import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarmultasPage } from './listarmultas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarmultasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarmultasPageRoutingModule {}
