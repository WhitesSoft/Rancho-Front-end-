import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarsocioPage } from './editarsocio.page';

const routes: Routes = [
  {
    path: '',
    component: EditarsocioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarsocioPageRoutingModule {}
