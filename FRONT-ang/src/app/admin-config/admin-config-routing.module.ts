import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnimalComponent } from './animal/animal.component';
import { ListAnimalsComponent } from './list-animals/list-animals.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'animal', component:AnimalComponent },
  {path:'list', component:ListAnimalsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminConfigRoutingModule { }
