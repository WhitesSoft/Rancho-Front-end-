import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarmedidoresuserPage } from './listarmedidoresuser.page';

const routes: Routes = [
  {
    path: '',
    component: ListarmedidoresuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarmedidoresuserPageRoutingModule {}
