import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarcobrosPageRoutingModule } from './listarcobros-routing.module';

import { ListarcobrosPage } from './listarcobros.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarcobrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarcobrosPage]
})
export class ListarcobrosPageModule {}
