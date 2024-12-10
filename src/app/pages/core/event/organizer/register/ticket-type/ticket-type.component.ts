import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TicketTypeEnum } from '../../../../../../shared/enums';
import { MessageValidationService } from '../../../../../../services/core/message-validation.service';

@Component({
  selector: 'app-ticket-type',
  templateUrl: './ticket-type.component.html',
  styleUrl: './ticket-type.component.scss',
})
export class TicketTypeComponent implements OnInit {
  form!: FormGroup;
  ticketTypeForm!: FormGroup;
  @Output() formOutput = new EventEmitter();
  private readonly formBuilder = inject(FormBuilder);
  private readonly validationMessageService = inject(MessageValidationService);

  protected ticketTypeEnum = TicketTypeEnum;
  constructor() {}
  ngOnInit(): void {
    this.buildForm();
    this.buildTicketTypeForm();
  }

  buildTicketTypeForm() {
    this.ticketTypeForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      disponibility: [null, [Validators.required]],
      price: [null, [Validators.required]],
      isAvailable: [true, [Validators.required]],
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      ticketTypes: this.formBuilder.array([]),
    });
  }

  onSubmit() {
    this.formOutput.emit(this.form.value);
  }

  addTicketType() {
    this.ticketTypeForm.markAllAsTouched();
    if (this.ticketTypeForm.valid) {
      this.ticketTypesField.push(
        this.formBuilder.group(this.ticketTypeForm.value)
      );
      this.buildTicketTypeForm();
      return;
    }
    this.validationMessageService.showMessage();
  }

  editTicketType(index: number) {
    const ticketType = this.ticketTypesField.at(index);
    this.ticketTypeForm.patchValue(ticketType.value);
    this.ticketTypesField.removeAt(index);
  }

  removeTicketType(index: number) {
    this.ticketTypesField.removeAt(index);
  }

  get nameField(): AbstractControl {
    return this.ticketTypeForm.controls['name'];
  }

  get disponibilityField(): AbstractControl {
    return this.ticketTypeForm.controls['disponibility'];
  }

  get priceField(): AbstractControl {
    return this.ticketTypeForm.controls['price'];
  }

  get ticketTypesField(): FormArray {
    return this.form.controls['ticketTypes'] as FormArray;
  }

  get availableField(): AbstractControl {
    return this.ticketTypeForm.controls['available'];
  }
}
