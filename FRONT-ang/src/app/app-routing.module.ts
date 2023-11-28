import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ConsulComponent } from './components/pages/consul/consul.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'register',component:RegisterComponent},
  {path:'consul', component:ConsulComponent},
  {path:'login', component:LoginComponent},

  {
    path: 'admin',
    loadChildren: () => import('./admin-config/admin-config.module').then(m => m.AdminConfigModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
