import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import {ToastModule} from "primeng/toast";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventRoutingModule,
    ToastModule
  ]
})
export class EventModule { }
