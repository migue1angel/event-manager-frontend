import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ticket-type',
  templateUrl: './ticket-type.component.html',
  styleUrl: './ticket-type.component.scss'
})
export class TicketTypeComponent {

  form!:FormGroup;
  protected readonly formBuilder = inject(FormBuilder);
  constructor() {
    this.formBuild();
  }

  formBuild(){
    return this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      disponibility: [null, [Validators.required]],
      price: [null,[Validators.required]],
      available: [null, [Validators.required]],
    });
  };

  get nameField():AbstractControl{
    return this.form.controls['name'];
  };

  get disponibility():AbstractControl{
    return this.form.controls['disponibility'];
  };

  get price():AbstractControl{
    return this.form.controls['price'];
  };

  get available():AbstractControl{
    return this.form.controls['available'];
  };
}
