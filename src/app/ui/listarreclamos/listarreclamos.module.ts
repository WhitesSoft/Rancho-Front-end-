import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarreclamosPageRoutingModule } from './listarreclamos-routing.module';

import { ListarreclamosPage } from './listarreclamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarreclamosPageRoutingModule
  ],
  declarations: [ListarreclamosPage]
})
export class ListarreclamosPageModule {}
