import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalletarifaPageRoutingModule } from './detalletarifa-routing.module';

import { DetalletarifaPage } from './detalletarifa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalletarifaPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [DetalletarifaPage]
})
export class DetalletarifaPageModule {}
