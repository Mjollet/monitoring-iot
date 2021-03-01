import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {DevicesComponent} from './views/devices/devices.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'devices', component: DevicesComponent},
  {path: '', redirectTo: 'devices', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
