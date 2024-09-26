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
active: number | undefined = 0;

    name: string |null = null;

    email: string |null = null;

    password: string |null = null;

    option1: boolean | undefined = false;

    option2: boolean | undefined = false;

    option3: boolean | undefined = false;

    option4: boolean | undefined = false;

    option5: boolean | undefined = false;

    option6: boolean | undefined = false;

    option7: boolean | undefined = false;

    option8: boolean | undefined = false;

    option9: boolean | undefined = false;

    option10: boolean | undefined = false;

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
