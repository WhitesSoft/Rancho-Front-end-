import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarmultasPageRoutingModule } from './asignarmultas-routing.module';

import { AsignarmultasPage } from './asignarmultas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarmultasPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [AsignarmultasPage]
})
export class AsignarmultasPageModule {}
