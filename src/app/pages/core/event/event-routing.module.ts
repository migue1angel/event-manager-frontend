import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { privateGuard } from '../../../shared/guards/private.guard';

const routes: Routes = [
  {
    path: 'organizer',
    loadChildren: () =>
      import('./organizer/organizer.module').then((m) => m.OrganizerModule),
    // canActivate: [privateGuard],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventRoutingModule {}
