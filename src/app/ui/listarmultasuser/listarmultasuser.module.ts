import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarmultasuserPageRoutingModule } from './listarmultasuser-routing.module';

import { ListarmultasuserPage } from './listarmultasuser.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarmultasuserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarmultasuserPage]
})
export class ListarmultasuserPageModule {}
