import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarreclamosuserPageRoutingModule } from './listarreclamosuser-routing.module';

import { ListarreclamosuserPage } from './listarreclamosuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarreclamosuserPageRoutingModule
  ],
  declarations: [ListarreclamosuserPage]
})
export class ListarreclamosuserPageModule {}
