import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { GeneralInformationComponent } from './general-information/general-information.component';
import { SponsorComponent } from './sponsor/sponsor.component';
import { TicketTypeComponent } from './ticket-type/ticket-type.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AccordionModule } from 'primeng/accordion';
import { FileUploadModule } from 'primeng/fileupload';
import { ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputNumberModule} from "primeng/inputnumber";
import { RegisterComponent } from './register.component';
import { StepsModule } from 'primeng/steps';
import { DividerModule } from 'primeng/divider';
import { AddressComponent } from './address/address.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MessageValidationService } from '../../../../../services/core/message-validation.service';
import { PanelModule } from 'primeng/panel';
import { PaypalComponent } from '../../components/paypal/paypal.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    GeneralInformationComponent,
    SponsorComponent,
    TicketTypeComponent,
    RegisterComponent,
    AddressComponent,
  ],
  imports: [
    PaypalComponent,
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    InputTextModule,
    CalendarModule,
    StepperModule,
    DropdownModule,
    SelectButtonModule,
    AccordionModule,
    FileUploadModule,
    ReactiveFormsModule,
    FileUploadModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextModule,
    StepsModule,
    InputNumberModule,
    DividerModule,
    MessageModule,
    ToastModule,
    ButtonModule, 
    AvatarModule, 
    BadgeModule,
    PanelModule,
    InputTextareaModule,
    TableModule,
    DropdownModule
  ],
  providers: [
    MessageService,
    MessageValidationService
  ]
})
export class RegisterModule { }
