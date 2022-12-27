import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarreclamoPageRoutingModule } from './editarreclamo-routing.module';

import { EditarreclamoPage } from './editarreclamo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarreclamoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarreclamoPage]
})
export class EditarreclamoPageModule {}
