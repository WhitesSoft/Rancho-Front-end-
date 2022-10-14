import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarsociosPage } from './listarsocios.page';

const routes: Routes = [
  {
    path: '',
    component: ListarsociosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarsociosPageRoutingModule {}
