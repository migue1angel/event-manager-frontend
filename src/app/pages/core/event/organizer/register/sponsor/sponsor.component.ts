import {Component, inject} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PrimeIcons} from "primeng/api";

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss'
})
export class SponsorComponent {

  /** Form **/
  form! : FormGroup
  private readonly formBuilder = inject(FormBuilder);
  uploadedFiles: any[] = [];
  private messageService: any;

  constructor() {
    this.buildForm();
  }

  buildForm(){
    return this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      fileSponsor: [null, [Validators.required]],
    })
  }

  onUpload(event:any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  get nameField():AbstractControl{
    return this.form.controls['name'];
  }

  get emailField():AbstractControl{
    return this.form.controls['email'];
  }

  get fileField(): AbstractControl {
    return this.form.controls['fileSponsors'];
  }

}
