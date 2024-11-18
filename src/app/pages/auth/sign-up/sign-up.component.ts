import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { MessageService, PrimeIcons } from 'primeng/api';
import { UsersHttpService } from '../../../services/auth/users-http.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthEnum } from '../../../shared/enums';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly messageService = inject(MessageService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected AuthEnum = AuthEnum;

  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  protected readonly PrimeIcons = PrimeIcons;

  constructor() {
    this.buildForm;
  }
  get buildForm() {
    return (this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      informationUser: this.informationUserForm,
    }));
  }

  get informationUserForm() {
    return this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],
    });
  }

  async OnSubmit() {
    this.register();
  }
  register() {
    this.authService.register(this.form.value).subscribe({
      next: (value) => {
        this.router.navigate([this.authService.urlRedirect]);
      },
      error: (error) => {
        console.log(error);
        
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: `${error}`,
          life: 3000,
        });
      },
    });
  }

  googleRegister() {
    this.authService.googleLogin();
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
  get informationUserField(): FormGroup {
    return this.form.controls['informationUser'] as FormGroup;
  }
  get nameField(): AbstractControl {
    return this.informationUserForm.controls['name'];
  }
  get lastnameField(): AbstractControl {
    return this.informationUserForm.controls['lastname'];
  }
}
