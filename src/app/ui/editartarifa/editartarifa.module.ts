import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditartarifaPageRoutingModule } from './editartarifa-routing.module';

import { EditartarifaPage } from './editartarifa.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditartarifaPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [EditartarifaPage]
})
export class EditartarifaPageModule {}
