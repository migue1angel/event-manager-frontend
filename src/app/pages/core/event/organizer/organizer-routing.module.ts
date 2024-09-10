import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path:'view',
    loadChildren: () => import('./view/view.module').then(m => m.ViewModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizerRoutingModule { }
