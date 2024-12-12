import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { GeneralInformationEnum } from '../../../../../../shared/enums/fields.enum';
import { MessageValidationService } from '../../../../../../services/core/message-validation.service';
import { AuthService } from '../../../../../../services/auth/auth.service';
import { UploadEvent } from 'primeng/fileupload';
import { HttpEvent } from '@angular/common/http';

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
      organizer: [this.authService.currentUser?.id, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      state: ['COMING', [Validators.required]],
      category: ['85a4bf40-2df8-44f9-8ccc-2ded0f64562e'],
      isPublic: [true, [Validators.required]],
      images: [[]],
    });
  }

  onChange(event: any) {
    if (this.imagesField.value.length <= 3) {
      return this.imagesField.setValue(event);
    }
    this.messageValidationService.showMessage('Solo se puede subir 3 imagenes'); 
    event.splice(3, 1);
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.imagesField.value.length == 0) {
      return this.messageValidationService.showMessage(
        'Se debe incluir al menos una imagen'
      );
    }
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

  get isPublicField(): AbstractControl {
    return this.form.controls['isPublic'];
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
  get imagesField(): FormArray {
    return this.form.controls['images'] as FormArray;
  }
}
