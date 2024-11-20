import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {  ButtonGroupModule } from 'primeng/buttongroup';
import { AuthButtonsComponent } from './components/auth-buttons/auth-buttons.component';
import { ErrorMessageDirective } from './directives/error-message.directive';
import { InteractiveMapComponent } from './components/interactive-map/interactive-map.component';
import { CustomLabelDirective } from './directives/custom-label.directive';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';



@NgModule({
  declarations: [
    AuthButtonsComponent,
    HomeComponent,
    ErrorMessageDirective,
    CustomLabelDirective,
    InteractiveMapComponent,
    MapComponent
  ],
  exports:[
    AuthButtonsComponent,
    InteractiveMapComponent,
    ErrorMessageDirective,
    CustomLabelDirective,
    MapComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
  ]
})
export class SharedModule { }
