import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowStudentsPageRoutingModule } from './show-students-routing.module';

import { ShowStudentsPage } from './show-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowStudentsPageRoutingModule
  ],
  declarations: [ShowStudentsPage]
})
export class ShowStudentsPageModule {}
