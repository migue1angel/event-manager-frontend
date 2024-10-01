import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {  ButtonGroupModule } from 'primeng/buttongroup';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { ErrorMessageDirective } from './directives/error-message.directive';
import { MapComponent } from './components/map/map.component';
import { MessageService } from 'primeng/api';



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
    ButtonGroupModule,
  ]
})
export class SharedModule { }
