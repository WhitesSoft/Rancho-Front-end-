import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarsolicitudesPageRoutingModule } from './listarsolicitudes-routing.module';

import { ListarsolicitudesPage } from './listarsolicitudes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarsolicitudesPageRoutingModule, 
    ComponentsModule
  ],
  declarations: [ListarsolicitudesPage]
})
export class ListarsolicitudesPageModule {}
