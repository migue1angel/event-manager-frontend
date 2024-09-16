import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { StepperModule } from 'primeng/stepper';
import { DropdownModule } from 'primeng/dropdown';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
  declarations: [
    GeneralInformationComponent,
    SponsorComponent,
    CollaboratorComponent,
    TicketTypeComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    InputTextModule,
    CalendarModule,
    StepperModule,
    DropdownModule,
    CascadeSelectModule,
    MultiSelectModule,
    SelectButtonModule,
    AccordionModule,
    FileUploadModule
  ]
})
export class RegisterModule { }
