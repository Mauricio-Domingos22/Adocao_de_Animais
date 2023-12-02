import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminConfigRoutingModule } from './admin-config-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AnimalComponent } from './animal/animal.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    AnimalComponent
  ],
  imports: [
    CommonModule,
    AdminConfigRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AdminConfigModule { }
