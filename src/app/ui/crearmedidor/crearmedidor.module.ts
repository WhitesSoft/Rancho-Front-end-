import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearmedidorPageRoutingModule } from './crearmedidor-routing.module';

import { CrearmedidorPage } from './crearmedidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearmedidorPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CrearmedidorPage]
})
export class CrearmedidorPageModule {}
