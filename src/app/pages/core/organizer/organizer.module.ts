import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizerRoutingModule } from './organizer-routing.module';
import { MyEventsComponent } from './my-events/my-events.component';
import { TabViewModule } from 'primeng/tabview';
import { EventListComponent } from './event-list/event-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    MyEventsComponent,
    EventListComponent,
    ScheduleComponent,
    
  ],
  imports: [
    CommonModule,
    TabViewModule,
    OrganizerRoutingModule,
    DataViewModule,
    TagModule,
    ButtonModule,
    CardModule
  ]
})
export class OrganizerModule { }
