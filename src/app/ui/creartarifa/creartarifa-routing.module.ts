import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreartarifaPage } from './creartarifa.page';

const routes: Routes = [
  {
    path: '',
    component: CreartarifaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreartarifaPageRoutingModule {}
