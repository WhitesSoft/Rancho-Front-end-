import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarsociosPageRoutingModule } from './listarsocios-routing.module';

import { ListarsociosPage } from './listarsocios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarsociosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarsociosPage]
})
export class ListarsociosPageModule {}
