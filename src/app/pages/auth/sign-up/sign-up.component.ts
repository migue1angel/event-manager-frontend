import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { UsersService } from '../../../services/http/auth/users.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  form!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  protected readonly PrimeIcons = PrimeIcons;
  // private readonly usersService = inject(UsersService);

  constructor( private usersService: UsersService, private router: Router) {
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
      this.router.navigate(['/auth/login']);
    });
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
