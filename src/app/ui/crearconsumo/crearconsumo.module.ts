import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearconsumoPageRoutingModule } from './crearconsumo-routing.module';

import { CrearconsumoPage } from './crearconsumo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearconsumoPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CrearconsumoPage]
})
export class CrearconsumoPageModule {}
