import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneratePetitionModalPageRoutingModule } from './generate-petition-modal-routing.module';

import { GeneratePetitionModalPage } from './generate-petition-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratePetitionModalPageRoutingModule
  ],
  declarations: [GeneratePetitionModalPage]
})
export class GeneratePetitionModalPageModule {}
