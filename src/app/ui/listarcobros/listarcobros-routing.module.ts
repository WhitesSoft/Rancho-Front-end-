import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarcobrosPage } from './listarcobros.page';

const routes: Routes = [
  {
    path: '',
    component: ListarcobrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarcobrosPageRoutingModule {}
