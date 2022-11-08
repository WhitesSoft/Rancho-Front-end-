import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecomunicadoPageRoutingModule } from './detallecomunicado-routing.module';

import { DetallecomunicadoPage } from './detallecomunicado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecomunicadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetallecomunicadoPage]
})
export class DetallecomunicadoPageModule {}
