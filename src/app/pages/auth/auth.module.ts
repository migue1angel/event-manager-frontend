import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { ProfileComponent } from './profile/profile.component';
import { AuthSuccessComponent } from './auth-success/auth-success.component';
import {AvatarModule} from "primeng/avatar";
import {ImageModule} from "primeng/image";
import {ChipModule} from "primeng/chip";
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    AuthSuccessComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    InputTextModule,
    AvatarModule,
    ImageModule,
    ChipModule,
    ToastModule,
    SharedModule
  ],
  exports:[LoginComponent],
  providers:[MessageService]
})
export class AuthModule { }
