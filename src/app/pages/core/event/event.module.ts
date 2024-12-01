import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import {ToastModule} from "primeng/toast";
import { PaypalComponent } from './components/paypal/paypal.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EventRoutingModule,
    ToastModule
  ]
})
export class EventModule { }
