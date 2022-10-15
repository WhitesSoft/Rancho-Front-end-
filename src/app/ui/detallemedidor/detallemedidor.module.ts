import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallemedidorPageRoutingModule } from './detallemedidor-routing.module';

import { DetallemedidorPage } from './detallemedidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallemedidorPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [DetallemedidorPage]
})
export class DetallemedidorPageModule {}
