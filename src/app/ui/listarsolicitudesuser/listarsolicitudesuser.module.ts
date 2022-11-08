import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarsolicitudesuserPageRoutingModule } from './listarsolicitudesuser-routing.module';

import { ListarsolicitudesuserPage } from './listarsolicitudesuser.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarsolicitudesuserPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListarsolicitudesuserPage]
})
export class ListarsolicitudesuserPageModule {}
