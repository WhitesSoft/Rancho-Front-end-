import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesocioPageRoutingModule } from './detallesocio-routing.module';

import { DetallesocioPage } from './detallesocio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesocioPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [DetallesocioPage]
})
export class DetallesocioPageModule {}
