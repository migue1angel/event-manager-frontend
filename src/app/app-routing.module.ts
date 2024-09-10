import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'core',
    loadChildren: ()=> import ('./pages/core/core.module').then(m => m.CoreModule)
  },
  {
    path:'auth',
    loadChildren: ()=> import ('./pages/auth/auth.module').then(m => m.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
