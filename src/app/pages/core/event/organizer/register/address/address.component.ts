import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LngLat } from 'maplibre-gl';
import { MessageService } from 'primeng/api';
import { AddressEnum, ValidateFormEnum } from '../../../../../../shared/enums';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
})
export class AddressComponent {
  form!: FormGroup;
  addressForm!: FormGroup;
  @Output() formOutput = new EventEmitter();

  private readonly formBuilder = inject(FormBuilder);
  private messageService = inject(MessageService);
  protected AddressEnum = AddressEnum;

  constructor() {
    this.buildAddressForm(), this.buildForm();
  }

  buildAddressForm() {
    return (this.addressForm = this.formBuilder.group({
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
      reference: [null, [Validators.required]],
      venue: [null, [Validators.required]],
    }));
  }

  buildForm() {
    return (this.form = this.formBuilder.group({
      address: this.addressForm,
    }));
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.formOutput.emit(this.form.value);
    } else {
      this.messageService.add({
        severity: ValidateFormEnum.severity,
        detail: ValidateFormEnum.message,
        life: 3000,
      });
    }
  }

  getLngLAt(event: LngLat) {
    const { lng, lat } = event;
    this.longitudeField.setValue(lng);
    this.latitudeField.setValue(lat);
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
