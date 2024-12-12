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
  protected form!: FormGroup;
  protected ticketTypeForm!: FormGroup;
  @Output() formOutput = new EventEmitter();
  private readonly formBuilder = inject(FormBuilder);
  private readonly messageValidationService = inject(MessageValidationService);

  protected ticketTypeEnum = TicketTypeEnum;
  constructor() {}
  ngOnInit(): void {
    this.buildForm();
    this.buildTicketTypeForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      ticketTypes: this.formBuilder.array([]),
    });
  }

  buildTicketTypeForm() {
    this.ticketTypeForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      disponibility: [null, [Validators.required]],
      price: [null, [Validators.required]],
      isAvailable: [true, [Validators.required]],
    });
  }

  onSubmit() {
    this.formOutput.emit(this.form.value);
  }

  addTicketType() {
    if (this.ticketTypeForm.valid) {
      this.ticketTypesField.push(
        this.formBuilder.group(this.ticketTypeForm.value)
      );
      this.ticketTypeForm.reset({
        isAvailable: true,
      });
    } else {
      this.ticketTypeForm.markAllAsTouched();
      this.messageValidationService.showMessage();
    }
  }

  editTicketType(index: number) {
    const ticketType = this.ticketTypesField.at(index);
    this.ticketTypeForm.patchValue(ticketType.value);
    this.ticketTypesField.removeAt(index);
  }

  removeTicketType(index: number) {
    this.ticketTypesField.removeAt(index);
  }

  get ticketTypesField(): FormArray {
    return this.form.get('ticketTypes') as FormArray;
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

  get isAvailableField(): AbstractControl {
    return this.ticketTypeForm.controls['available'];
  }
}
