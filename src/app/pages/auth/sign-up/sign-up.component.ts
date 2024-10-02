import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { UsersHttpService } from '../../../services/http/auth/users-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthHttpService } from '../../../services/http/auth/auth-http.service';
import { AuthService } from '../../../services/auth/auth.service';
import { AuthEnum } from '../../../shared/enums';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly authHttpService = inject(AuthHttpService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly usersHttpService = inject(UsersHttpService);
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
    this.create();
  }
  create() {
    this.usersHttpService.create(this.form.value).subscribe((response) => {
      const route = sessionStorage.getItem('urlRedirect');
      this.authService.token = response.token;
      this.router.navigate([route]);
    });
  }

  googleRegister() {
    this.authHttpService.googleLogin();
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
