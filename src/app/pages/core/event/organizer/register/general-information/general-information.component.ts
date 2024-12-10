import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
} from '@angular/forms';
import { GeneralInformationEnum } from '../../../../../../shared/enums/fields.enum';
import { MessageValidationService } from '../../../../../../services/core/message-validation.service';
import { AuthService } from '../../../../../../services/auth/auth.service';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss',
})
export class GeneralInformationComponent {
  form!: FormGroup;
  generalInformationForm!: FormGroup;
  @Output() formOutput = new EventEmitter();

  protected readonly authService = inject(AuthService);
  protected readonly formBuilder = inject(FormBuilder);
  private readonly messageValidationService = inject(MessageValidationService);
  protected GeneralInformationEnum = GeneralInformationEnum;

  constructor() {
    this.formBuild();
  }

  formBuild() {
    this.form = this.formBuilder.group({
      organizer: [this.authService.currentUser?.id],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      state: ['COMING', [Validators.required]],
      category: [null],
    });
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

  get stateField(): AbstractControl {
    return this.form.controls['state'];
  }

  get categoryField(): AbstractControl {
    return this.form.controls['category'];
  }
}
