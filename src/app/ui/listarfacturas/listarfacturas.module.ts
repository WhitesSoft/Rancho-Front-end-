import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarfacturasPageRoutingModule } from './listarfacturas-routing.module';

import { ListarfacturasPage } from './listarfacturas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarfacturasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarfacturasPage]
})
export class ListarfacturasPageModule {}
