import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallereclamoPageRoutingModule } from './detallereclamo-routing.module';

import { DetallereclamoPage } from './detallereclamo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallereclamoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallereclamoPage]
})
export class DetallereclamoPageModule {}
