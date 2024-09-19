import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  form! : FormGroup
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly PrimeIcons = PrimeIcons;

  constructor() {
    this.formBuild();
  }

   formBuild(){
    return this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
    });
  };

  get nameField():AbstractControl{
    return this.form.controls['name'];
  };

  get lastNameField():AbstractControl{
    return this.form.controls['lastName'];
  };

  get phoneField():AbstractControl{
    return this.form.controls['phone'];
  };
}
