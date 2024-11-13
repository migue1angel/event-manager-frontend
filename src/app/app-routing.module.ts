import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { privateGuard } from './shared/guards/private.guard';

const routes: Routes = [
  {
    path:'',
    component: MainComponent,
    children:[
      {
        path:'core',
        loadChildren: ()=> import ('./pages/core/core.module').then(m => m.CoreModule),
        // canActivate: [privateGuard]
      },
      {
        path:'auth',
        loadChildren: ()=> import ('./pages/auth/auth.module').then(m => m.AuthModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
