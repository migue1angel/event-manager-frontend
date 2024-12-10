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
  buildForm(){
    return this.form = this.formBuilder.group({
      name: [null],
      description:[null],
      startDate:[null],
      endDate:[null],
      state:[null],
      isPublic:[null],
      category:[null],
      organizer:[null],
      address:[null],
      hasSponsors:[null],
      sponsors:[null],
      ticketTypes:[null],
    });
  }

  saveData(event:any){
    console.log(event);
    
    this.form.patchValue(event)
  }
}
