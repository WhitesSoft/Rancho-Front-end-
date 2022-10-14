import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleusuarioPageRoutingModule } from './detalleusuario-routing.module';

import { DetalleusuarioPage } from './detalleusuario.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleusuarioPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [DetalleusuarioPage]
})
export class DetalleusuarioPageModule {}
