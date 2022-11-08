import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarsolicitudesuserPage } from './listarsolicitudesuser.page';

const routes: Routes = [
  {
    path: '',
    component: ListarsolicitudesuserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarsolicitudesuserPageRoutingModule {}
