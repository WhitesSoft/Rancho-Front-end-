import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreartarifaPageRoutingModule } from './creartarifa-routing.module';

import { CreartarifaPage } from './creartarifa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreartarifaPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [CreartarifaPage]
})
export class CreartarifaPageModule {}
