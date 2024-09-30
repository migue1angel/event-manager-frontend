import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LngLat } from 'maplibre-gl';

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
    venue: [null, [Validators.required]],
  });

  form: FormGroup = this.formBuilder.group({
    address: this.addressForm,
  });

  onSubmit() {
    this.form.markAllAsTouched()
    if(this.form.valid){
      this.formOutput.emit(this.form.value);
    }else{}
  }


  getLngLAt(event: LngLat){
    const {lng, lat} = event
    this.longitudeField.setValue(lng)
    this.latitudeField.setValue(lat)
  }

  get latitudeField(): AbstractControl {
    return this.addressForm.controls['latitude'];
  }
  get longitudeField(): AbstractControl {
    return this.addressForm.controls['longitude'];
  }
  get referenceField(): AbstractControl {
    return this.addressForm.controls['reference'];
  }
  get venueField(): AbstractControl {
    return this.addressForm.controls['venue'];
  }
}
