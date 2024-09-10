import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    FormComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
