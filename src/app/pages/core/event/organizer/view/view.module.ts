import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CardModule } from 'primeng/card';
import { EmailComponent } from './email/email.component';
import { SidebarModule } from 'primeng/sidebar';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [
    EmailComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ViewRoutingModule,
    CardModule,
    SidebarModule,
    InputTextModule,
    GalleriaModule
    
  ]
})
export class ViewModule { }
