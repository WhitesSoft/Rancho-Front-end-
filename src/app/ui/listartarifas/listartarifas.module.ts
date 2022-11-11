import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListartarifasPageRoutingModule } from './listartarifas-routing.module';

import { ListartarifasPage } from './listartarifas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListartarifasPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListartarifasPage]
})
export class ListartarifasPageModule {}
