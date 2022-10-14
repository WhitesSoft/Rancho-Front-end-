import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarusuariosPageRoutingModule } from './listarusuarios-routing.module';

import { ListarusuariosPage } from './listarusuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarusuariosPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListarusuariosPage]
})
export class ListarusuariosPageModule {}
