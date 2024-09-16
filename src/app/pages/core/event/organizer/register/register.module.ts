import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputNumberModule} from "primeng/inputnumber";

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
    ReactiveFormsModule,
    ToastModule,
    FileUploadModule,
    MessageModule,
    FloatLabelModule,
    InputNumberModule
  ],
  providers:[MessageService]
})
export class RegisterModule { }
