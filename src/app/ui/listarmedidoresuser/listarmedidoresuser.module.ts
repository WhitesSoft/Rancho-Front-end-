import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarmedidoresuserPageRoutingModule } from './listarmedidoresuser-routing.module';

import { ListarmedidoresuserPage } from './listarmedidoresuser.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarmedidoresuserPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListarmedidoresuserPage]
})
export class ListarmedidoresuserPageModule {}
