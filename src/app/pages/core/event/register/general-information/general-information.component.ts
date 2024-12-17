import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  AbstractControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { CatalogueInterface } from '../../../../../models/core/catalogue.interface';
import { AuthService } from '../../../../../services/auth/auth.service';
import { CataloguesHttpService } from '../../../../../services/core/catalogues-http.service';
import { MessageValidationService } from '../../../../../services/core/message-validation.service';
import { GeneralInformationEnum } from '../../../../../shared/enums';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss',
})
export class GeneralInformationComponent implements OnInit {
  form!: FormGroup;
  generalInformationForm!: FormGroup;
  @Output() formOutput = new EventEmitter();

  protected readonly authService = inject(AuthService);
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly cataloguesHttpService = inject(CataloguesHttpService);
  private readonly messageValidationService = inject(MessageValidationService);
  protected GeneralInformationEnum = GeneralInformationEnum;
  protected categories: CatalogueInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    this.formBuild();
    this.getCategories();
    this.organizerField.setValue(this.authService.currentUser!.id);
  }

  formBuild() {
    this.form = this.formBuilder.group({
      organizer: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      state: ['COMING', [Validators.required]],
      category: [null, Validators.required],
      isPublic: [true, [Validators.required]],
      images: [[]],
    });
  }

  getCategories() {
    this.cataloguesHttpService
      .findAll()
      .subscribe((res) => (this.categories = res));
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

  get organizerField(): AbstractControl {
    return this.form.controls['organizer'];
  }

  get imagesField(): FormArray {
    return this.form.controls['images'] as FormArray;
  }
}
