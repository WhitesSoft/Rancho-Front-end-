import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarsolicitudPageRoutingModule } from './editarsolicitud-routing.module';

import { EditarsolicitudPage } from './editarsolicitud.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarsolicitudPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarsolicitudPage]
})
export class EditarsolicitudPageModule {}
