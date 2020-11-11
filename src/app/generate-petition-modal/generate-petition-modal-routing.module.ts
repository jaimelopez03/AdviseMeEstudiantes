import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneratePetitionModalPage } from './generate-petition-modal.page';

const routes: Routes = [
  {
    path: '',
    component: GeneratePetitionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneratePetitionModalPageRoutingModule {}
