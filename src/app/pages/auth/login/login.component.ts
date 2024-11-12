import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService, PrimeIcons } from 'primeng/api';
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
  private readonly authService = inject(AuthService);
  private readonly messageService = inject(MessageService);
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
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.login();
    }
  }

  login() {
    this.authService
      .login(this.form.value)
      .subscribe({
        next: (value) => {
          this.router.navigate([this.authService.urlRedirect]);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: `${error}`,
            life: 3000,
          });
        },
      });
  }

  googleLogIn() {
    this.authService.googleLogin();
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
}
