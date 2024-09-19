import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  /* {
    path:'collaborator',
    component:CollaboratorComponent
  },
  {
    path:'general',
    component:GeneralInformationComponent
  },
  {
    path:'sponsor',
    component:SponsorComponent
  },
  {
    path:'ticket-type',
    component:TicketTypeComponent
  }, */
  {
    path:'',
    component:RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
