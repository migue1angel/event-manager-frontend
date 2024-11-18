import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import {ToastModule} from "primeng/toast";
import {StepperModule} from "primeng/stepper";
import {StepsModule} from "primeng/steps";
import {Button} from "primeng/button";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizerRoutingModule,
    ToastModule,
    StepperModule,
    StepsModule,
    Button
  ]
})
export class OrganizerModule { }
