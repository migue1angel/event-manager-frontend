import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CardModule } from 'primeng/card';
import { EmailComponent } from './email/email.component';


@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    CardModule
  ]
})
export class ViewModule { }
