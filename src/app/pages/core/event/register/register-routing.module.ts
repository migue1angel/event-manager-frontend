import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { PaypalComponent } from '../components/paypal/paypal.component';

const routes: Routes = [
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'payment',
    component:PaypalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
