import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarmultasuserPage } from './listarmultasuser.page';

const routes: Routes = [
  {
    path: '',
    component: ListarmultasuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarmultasuserPageRoutingModule {}
