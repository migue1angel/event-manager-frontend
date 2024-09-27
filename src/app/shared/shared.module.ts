import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from '../pages/auth/auth.module';
import {  ButtonGroupModule } from 'primeng/buttongroup';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { ErrorMessageDirective } from './directives/error-message.directive';



@NgModule({
  declarations: [
    AuthButtonsComponent,
    ErrorMessageDirective
  ],
  exports:[
    AuthButtonsComponent,
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
