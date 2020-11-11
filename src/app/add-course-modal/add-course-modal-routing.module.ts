import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCourseModalPage } from './add-course-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddCourseModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCourseModalPageRoutingModule {}
