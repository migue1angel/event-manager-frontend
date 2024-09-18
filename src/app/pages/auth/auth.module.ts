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
import { ActivatedRoute } from '@angular/router';
import { AuthSuccessComponent } from './auth-success/auth-success.component';


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
    InputTextModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
