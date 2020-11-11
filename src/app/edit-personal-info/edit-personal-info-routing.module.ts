import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPersonalInfoPage } from './edit-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: EditPersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPersonalInfoPageRoutingModule {}
