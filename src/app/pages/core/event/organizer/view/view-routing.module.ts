import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {EmailComponent} from "../../components/email/email.component";

const routes: Routes = [
  {
    path:'event-list',
    component:EventListComponent
  },
  {
    path:'event-detail/:id',
    component: EventDetailComponent
  },
  {
    path:'email/:id',
    component: EmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
