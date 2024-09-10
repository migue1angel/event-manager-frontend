import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';


@NgModule({
  declarations: [
    GeneralInformationComponent,
    SponsorComponent,
    CollaboratorComponent,
    TicketTypeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
