import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { DetailComponent } from '../components/detail/detail.component';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    CardModule,
    ButtonModule,
    SidebarModule,
    DataViewModule,
    TagModule,
    RatingModule,
    DetailComponent
  ],
})
export class PublicModule { }
