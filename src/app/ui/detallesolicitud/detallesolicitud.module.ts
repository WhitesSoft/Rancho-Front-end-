import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesolicitudPageRoutingModule } from './detallesolicitud-routing.module';

import { DetallesolicitudPage } from './detallesolicitud.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesolicitudPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallesolicitudPage]
})
export class DetallesolicitudPageModule {}
