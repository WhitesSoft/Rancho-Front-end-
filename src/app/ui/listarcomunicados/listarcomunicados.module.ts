import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcomunicadosPageRoutingModule } from './listarcomunicados-routing.module';

import { ListarcomunicadosPage } from './listarcomunicados.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcomunicadosPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListarcomunicadosPage]
})
export class ListarcomunicadosPageModule {}
