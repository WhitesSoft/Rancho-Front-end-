import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarreclamosuserPageRoutingModule } from './listarreclamosuser-routing.module';

import { ListarreclamosuserPage } from './listarreclamosuser.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarreclamosuserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarreclamosuserPage]
})
export class ListarreclamosuserPageModule {}
