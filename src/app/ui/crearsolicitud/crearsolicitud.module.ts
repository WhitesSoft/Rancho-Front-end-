import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearsolicitudPageRoutingModule } from './crearsolicitud-routing.module';

import { CrearsolicitudPage } from './crearsolicitud.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearsolicitudPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearsolicitudPage]
})
export class CrearsolicitudPageModule {}
