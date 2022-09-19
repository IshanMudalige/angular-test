import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {path:'hotels',component:HotelsComponent},
  {path:'contracts',component:ContractsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
