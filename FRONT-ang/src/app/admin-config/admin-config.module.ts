import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AnimalsComponent } from './animals/animals.component';


@NgModule({
  declarations: [
    AdminComponent,
    AnimalsComponent
  ],
  imports: [
    CommonModule,
    AdminConfigRoutingModule
  ]
})
export class AdminConfigModule { }
