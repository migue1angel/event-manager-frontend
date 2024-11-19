import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { GeneralInformationEnum } from '../../../../../../shared/enums/fields.enum';
import { MessageValidationService } from '../../../../../../services/core/message-validation.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss',
})
export class GeneralInformationComponent {
  form!: FormGroup;
  generalInformationForm!: FormGroup;
  @Output() formOutput = new EventEmitter();

  protected readonly formBuilder = inject(FormBuilder);
  private readonly messageValidationService = inject(MessageValidationService);
  protected GeneralInformationEnum = GeneralInformationEnum;

  constructor() {
    this.formBuild();
  }

  formBuild() {
    return (this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      status: [null, [Validators.required]],
      category: [null, [Validators.required]],
      address: [null, [Validators.required]],
    }));
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.formOutput.emit(this.form.value);
    } else {
      this.messageValidationService.showMessage();
    }
  }

  get nameField(): AbstractControl {
    return this.form.controls['name'];
  }

  get descriptionField(): AbstractControl {
    return this.form.controls['description'];
  }

  get startDateField(): AbstractControl {
    return this.form.controls['startDate'];
  }

  get endDateField(): AbstractControl {
    return this.form.controls['endDate'];
  }

  get statusField(): AbstractControl {
    return this.form.controls['status'];
  }

  get categoryField(): AbstractControl {
    return this.form.controls['category'];
  }

  get addressField(): AbstractControl {
    return this.form.controls['address'];
  }
}
