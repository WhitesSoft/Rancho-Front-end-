import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarcomunicadoPageRoutingModule } from './editarcomunicado-routing.module';

import { EditarcomunicadoPage } from './editarcomunicado.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarcomunicadoPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [EditarcomunicadoPage]
})
export class EditarcomunicadoPageModule {}
