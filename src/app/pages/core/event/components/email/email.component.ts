import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrl: './email.component.scss'
})
export class EmailComponent {

  protected form!:FormGroup;
  protected readonly formBuilder = inject(FormBuilder);

  constructor(){
    this.buildForm();
  }

  buildForm(){
    return this.form = this.formBuilder.group({
      title:[null, [Validators.required]],
      message: [null, [Validators.required]],
      hasBeenRead:[null, [Validators.required]],
    })
  };

  get titleField(){
    return this.form.controls['title'];
  };

  get messageField(){
    return this.form.controls['message'];
  };

  get hasBeenReadField(){
    return this.form.controls['hasBeenRead'];
  };
}
