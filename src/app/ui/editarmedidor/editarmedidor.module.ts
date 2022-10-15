import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarmedidorPageRoutingModule } from './editarmedidor-routing.module';

import { EditarmedidorPage } from './editarmedidor.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarmedidorPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [EditarmedidorPage]
})
export class EditarmedidorPageModule {}
