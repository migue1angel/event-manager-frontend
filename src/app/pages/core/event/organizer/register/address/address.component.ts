import { Component, EventEmitter, inject, Output } from '@angular/core';
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

  @Output() formOutput = new EventEmitter();

  constructor() {}

  addressForm: FormGroup = this.formBuilder.group({
    latitude: [null, [Validators.required]],
    longitude: [null, [Validators.required]],
    reference: [null, [Validators.required]],
    address: [null, [Validators.required]],
  });

  form: FormGroup = this.formBuilder.group({
    address: this.addressForm,
  });

  onSubmit() {
    this.formOutput.emit(this.form.value);
  }

  // get addressFormGroup(): FormGroup {
  //   return this.form.controls['address'] as FormGroup;
  // }
  get latitudeField(): AbstractControl {
    return this.addressForm.controls['latitude'];
  }
  get longitudeField(): AbstractControl {
    return this.addressForm.controls['longitude'];
  }
  get referenceField(): AbstractControl {
    return this.addressForm.controls['reference'];
  }
  get addressField(): AbstractControl {
    return this.addressForm.controls['address'];
  }
}
