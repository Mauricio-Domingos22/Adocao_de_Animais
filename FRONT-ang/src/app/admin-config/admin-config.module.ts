import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AnimalComponent } from './animal/animal.component';


@NgModule({
  declarations: [
    AdminComponent,
    AnimalComponent
  ],
  imports: [
    CommonModule,
    AdminConfigRoutingModule
  ]
})
export class AdminConfigModule { }
