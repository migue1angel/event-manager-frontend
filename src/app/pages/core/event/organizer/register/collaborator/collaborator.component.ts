import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrl: './collaborator.component.scss'
})
export class CollaboratorComponent {

  form! : FormGroup
  protected readonly formBuilder = inject(FormBuilder);

  constructor() {}

  formBuild(){
    return this.formBuilder.group({

    })
  }

}
