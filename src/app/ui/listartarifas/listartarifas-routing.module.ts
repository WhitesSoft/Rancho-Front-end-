import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListartarifasPage } from './listartarifas.page';

const routes: Routes = [
  {
    path: '',
    component: ListartarifasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListartarifasPageRoutingModule {}
