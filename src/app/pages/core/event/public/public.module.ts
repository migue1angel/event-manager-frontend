import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { DetailComponent } from '../components/detail/detail.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

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
    DataViewModule,
    DialogModule,
    InputTextModule,
    FormsModule
  ],
})
export class PublicModule { }
