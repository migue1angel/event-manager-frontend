import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {

  form!: FormGroup;
  private readonly authService = inject(AuthService);
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly PrimeIcons = PrimeIcons;
  products: any;
  responsiveOptions: any;

  constructor() {
  }
  ngOnInit(): void {
    this.formBuild();
    this.form.patchValue(this.authService.currentUser?.informationUser!);
  }

  formBuild() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  }

  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }

  get lastNameField(): AbstractControl {
    return this.form.controls['lastname'];
  }

  get phoneField(): AbstractControl {
    return this.form.controls['phone'];
  }
}
