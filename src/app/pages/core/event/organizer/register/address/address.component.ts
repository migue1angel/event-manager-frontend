import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  private readonly formBuilder = inject(FormBuilder);

  constructor() {}

  form: FormGroup = this.formBuilder.group({
    latitude: [null, [Validators.required]],
    longitude: [null, [Validators.required]],
    reference: [null, [Validators.required]],
    address: [null, [Validators.required]],
  });

  get latitudeField(): AbstractControl {
    return this.form.controls['latitude'];
  }
  get longitudeField(): AbstractControl {
    return this.form.controls['longitude'];
  }
  get referenceField(): AbstractControl {
    return this.form.controls['reference'];
  }
  get addressField(): AbstractControl {
    return this.form.controls['address'];
  }
}
