import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { DetailComponent } from '../components/detail/detail.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    DetailComponent,
    ButtonModule,
    TagModule,
    DataViewModule
  ],
})
export class PublicModule { }
