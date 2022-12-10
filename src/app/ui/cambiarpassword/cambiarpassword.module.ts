import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiarpasswordPageRoutingModule } from './cambiarpassword-routing.module';

import { CambiarpasswordPage } from './cambiarpassword.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambiarpasswordPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CambiarpasswordPage]
})
export class CambiarpasswordPageModule {}
