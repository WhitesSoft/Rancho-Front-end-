import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarmedidoresPageRoutingModule } from './listarmedidores-routing.module';

import { ListarmedidoresPage } from './listarmedidores.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarmedidoresPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListarmedidoresPage]
})
export class ListarmedidoresPageModule {}
