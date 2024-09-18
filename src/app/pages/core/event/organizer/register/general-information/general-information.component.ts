import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'app-general-information',
  templateUrl: './general-information.component.html',
  styleUrl: './general-information.component.scss'
})
export class GeneralInformationComponent {
  form!:FormGroup;
  protected readonly formBuilder = inject(FormBuilder);
  constructor() {
    this.formBuild();
  }

  formBuild(){
    return this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null,[Validators.required]],
      endDate: [null, [Validators.required]],
      status: [null, [Validators.required]],
      category: [null, [Validators.required]],
      address: [null, [Validators.required]],

    });
  };

  get name():AbstractControl{
    return this.form.controls['name'];
  };

  get description():AbstractControl{
    return this.form.controls['description'];
  };

  get startDate():AbstractControl{
    return this.form.controls['startDate'];
  };

  get endDate():AbstractControl{
    return this.form.controls['endDate'];
  };

  get status():AbstractControl{
    return this.form.controls['status'];
  };

  get category():AbstractControl{
    return this.form.controls['category'];
  };

  get address():AbstractControl{
    return this.form.controls['address'];
  };
    
}
