import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditartarifaPage } from './editartarifa.page';

const routes: Routes = [
  {
    path: '',
    component: EditartarifaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditartarifaPageRoutingModule {}
