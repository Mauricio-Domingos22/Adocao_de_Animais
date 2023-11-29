import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnimalComponent } from './animal/animal.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'animal', component:AnimalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminConfigRoutingModule { }
