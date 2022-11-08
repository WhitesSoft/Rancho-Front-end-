import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComunicadosglobalPageRoutingModule } from './comunicadosglobal-routing.module';

import { ComunicadosglobalPage } from './comunicadosglobal.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComunicadosglobalPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ComunicadosglobalPage]
})
export class ComunicadosglobalPageModule {}
