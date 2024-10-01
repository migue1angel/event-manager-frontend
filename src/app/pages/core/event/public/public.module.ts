import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SidebarModule } from 'primeng/sidebar';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    SidebarModule
  ]
})
export class PublicModule { }
