import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C4Component } from './sesiones/c4/c4.component';

const routes: Routes = [
  {path:'',component:C4Component},
  {path:'**',pathMatch:'full',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
