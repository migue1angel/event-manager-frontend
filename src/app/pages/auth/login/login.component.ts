import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { AuthHttpService } from '../../../services/http/auth/auth-http.service';
import { LoginModel } from '../../../models/auth/login.model';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  private readonly authHttpService = inject(AuthHttpService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly PrimeIcons = PrimeIcons;

  constructor() {
    this.buildForm;
  }
  get buildForm() {
    return (this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    }));
  }

  submit() {
    this.login();
  }

  login() {
    this.authHttpService.login(this.form.value).subscribe((response) => {
      const route = sessionStorage.getItem('urlRedirect');
      this.authService.token = response.token;
      this.router.navigate([route]);
    });
  }

  googleLogIn() {
    this.authHttpService.googleLogin();
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
}
