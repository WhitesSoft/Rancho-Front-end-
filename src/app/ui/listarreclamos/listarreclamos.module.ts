import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarreclamosPageRoutingModule } from './listarreclamos-routing.module';

import { ListarreclamosPage } from './listarreclamos.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarreclamosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarreclamosPage]
})
export class ListarreclamosPageModule {}
