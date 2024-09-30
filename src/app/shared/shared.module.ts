import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from '../pages/auth/auth.module';
import {  ButtonGroupModule } from 'primeng/buttongroup';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { ErrorMessageDirective } from './directives/error-message.directive';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    AuthButtonsComponent,
    ErrorMessageDirective,
    MapComponent
  ],
  exports:[
    AuthButtonsComponent,
    MapComponent,
    ErrorMessageDirective
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    AuthModule,
    ButtonGroupModule
  ]
})
export class SharedModule { }
