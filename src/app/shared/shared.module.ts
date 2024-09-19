import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthButtonsComponent } from './auth-buttons/auth-buttons.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AuthModule } from '../pages/auth/auth.module';
import {  ButtonGroupModule } from 'primeng/buttongroup';



@NgModule({
  declarations: [
    AuthButtonsComponent
  ],
  exports:[
    AuthButtonsComponent
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
