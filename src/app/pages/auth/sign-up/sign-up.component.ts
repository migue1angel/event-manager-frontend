import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { UsersHttpService } from '../../../services/http/auth/users-http.service';
import {  Router } from '@angular/router';
import { AuthService } from '../../../services/http/auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  private readonly usersService = inject(UsersHttpService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);


  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  protected readonly PrimeIcons = PrimeIcons;

  constructor( ) {
    this.buildForm;
  }
  get buildForm() {
    return this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      informationUser: this.informationUserForm
    });
  }
  
  get informationUserForm(){
    return  this.formBuilder.group({
      name: [null, Validators.required],
      lastname: [null, Validators.required],    
    }) 
  }

  async OnSubmit() {
    this.create();
  }
  create() {
    this.usersService.create(this.form.value).subscribe(() => {
      this.router.navigate(['/core/event/public/event-list']);
    });
  }

  googleRegister() {
    this.authService.googleRegister();
  }

  get emailField(): AbstractControl {
    return this.form.controls['email'];
  }
  get passwordField(): AbstractControl {
    return this.form.controls['password'];
  }
  get informationUserField():FormGroup {
    return this.form.controls['informationUser'] as FormGroup
  }
  get nameField(): AbstractControl {
    return this.informationUserForm.controls['name'];
  }
  get lastnameField(): AbstractControl {
    return this.informationUserForm.controls['lastname'];
  }
}
