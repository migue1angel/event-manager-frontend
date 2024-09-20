import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  protected readonly formBuilder = inject(FormBuilder);
  protected form! : FormGroup;

constructor() {
  this.buildForm()
}

  buildForm(){
    return this.form = this.formBuilder.group({
      name: [null],
      description:[null],
      start_date:[new Date()],
      en_date:[new Date()],
      state:[[]],
      isPublic:[null],
      category:[[]],
      organizer:[[]],
      address:[[]],
      sponsors:[[]],
      registrations:[[]],
      feedback:[[]],
    });
  }
}
