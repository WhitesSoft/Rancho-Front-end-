import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarsolicitudesPage } from './listarsolicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarsolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarsolicitudesPageRoutingModule {}
