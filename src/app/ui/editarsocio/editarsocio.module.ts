import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarsocioPageRoutingModule } from './editarsocio-routing.module';

import { EditarsocioPage } from './editarsocio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarsocioPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [EditarsocioPage]
})
export class EditarsocioPageModule {}
