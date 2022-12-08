import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallereclamoPageRoutingModule } from './detallereclamo-routing.module';

import { DetallereclamoPage } from './detallereclamo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallereclamoPageRoutingModule
  ],
  declarations: [DetallereclamoPage]
})
export class DetallereclamoPageModule {}
