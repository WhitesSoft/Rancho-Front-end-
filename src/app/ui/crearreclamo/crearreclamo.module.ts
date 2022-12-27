import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearreclamoPageRoutingModule } from './crearreclamo-routing.module';

import { CrearreclamoPage } from './crearreclamo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearreclamoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearreclamoPage]
})
export class CrearreclamoPageModule {}
