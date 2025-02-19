import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { privateGuard } from '../../../../shared/guards/private.guard';

const routes: Routes = [
  {
    path: 'event-list',
    component: EventListComponent,
  },
  {
    path: 'event-detail/:id',
    component: EventDetailComponent,
    canActivate:[privateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
