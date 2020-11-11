import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPersonalInfoPageRoutingModule } from './edit-personal-info-routing.module';

import { EditPersonalInfoPage } from './edit-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPersonalInfoPageRoutingModule
  ],
  declarations: [EditPersonalInfoPage]
})
export class EditPersonalInfoPageModule {}
