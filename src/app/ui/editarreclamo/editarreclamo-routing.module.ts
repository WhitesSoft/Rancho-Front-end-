import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarreclamoPage } from './editarreclamo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarreclamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarreclamoPageRoutingModule {}
