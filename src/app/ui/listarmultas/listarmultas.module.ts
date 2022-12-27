import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarmultasPageRoutingModule } from './listarmultas-routing.module';

import { ListarmultasPage } from './listarmultas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarmultasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarmultasPage]
})
export class ListarmultasPageModule {}
