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
      start_date:[null],
      end_date:[null],
      state:[null],
      isPublic:[null],
      category:[null],
      organizer:[null],
      address:[null],
      sponsors:[null],
    });
  }

  saveData(event:any){
    console.log(event);
    
    this.form.patchValue(event)
  }
}
