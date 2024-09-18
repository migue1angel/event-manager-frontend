import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CardModule } from 'primeng/card';
import { EmailComponent } from './email/email.component';
import { SidebarModule } from 'primeng/sidebar';


@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule,
    CardModule,
    SidebarModule,
    
  ]
})
export class ViewModule { }
