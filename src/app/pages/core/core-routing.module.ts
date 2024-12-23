import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from '../../shared/guards/private.guard';

const routes: Routes = [
  {
    path: 'event',
    loadChildren: () =>
      import('./event/event.module').then((m) => m.EventModule),
  },
  {
    path: 'organizer',
    loadChildren: () =>
      import('./organizer/organizer.module').then((m) => m.OrganizerModule),
    canActivate: [privateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
