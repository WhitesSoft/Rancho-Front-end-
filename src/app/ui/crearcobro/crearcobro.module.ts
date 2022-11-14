import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearcobroPageRoutingModule } from './crearcobro-routing.module';

import { CrearcobroPage } from './crearcobro.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearcobroPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CrearcobroPage]
})
export class CrearcobroPageModule {}
