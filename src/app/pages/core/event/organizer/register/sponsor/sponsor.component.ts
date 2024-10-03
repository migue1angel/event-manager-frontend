import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService, PrimeIcons } from 'primeng/api';
import { SponsorEnum } from '../../../../../../shared/enums';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss',
})
export class SponsorComponent implements OnInit {
  protected form!: FormGroup;
  protected sponsorForm!: FormGroup;
  private newSponsorsIndex?: number;

  private messageService = inject(MessageService);
  private readonly formBuilder = inject(FormBuilder);
  protected SponsorEnum = SponsorEnum;
  uploadedFiles: any[] = [];


  constructor() {
    this.buildForm();
    this.buildSponsorForm();
  }
  ngOnInit(): void {}

  buildForm() {
    this.form = this.formBuilder.group({
      sponsors: this.formBuilder.array([], [Validators.required,Validators.minLength(1)]),
    });
  }

  buildSponsorForm() {
    this.sponsorForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      photo: [null,[Validators.required]],
    });
  }

  onUpload(event:any){
    this.photoField.setValue(event)
    console.log(this.photoField.value);
    
  }
  
  addSponsor() {
    this.sponsorForm.markAllAsTouched();
    if (this.sponsorForm.valid) {
      this.sponsors.push(this.formBuilder.group(this.sponsorForm.value));
      this.sponsorForm.reset()
    } 
  }
  
  editSponsor(index: number){
    this.sponsorForm.setValue(this.sponsors.controls[index].value)
    this.sponsors.removeAt(index)
  }
  
  removeSponsor(index:number){
    this.sponsors.removeAt(index)
  }
  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('data enviada');
    }else{
      this.messageService.add({
        severity: 'error',
        detail: 'Se debe agregar al menos un sponsor',
        life: 3000,
      });
    }
  }

  validateSponsorsControls() {
    this.sponsors.valueChanges.subscribe(() => {
      if(this.sponsors.controls.length >= 1){
        this.sponsors.controls[this.newSponsorsIndex!]
        .get('name')!
        .addValidators([Validators.required]);
      this.sponsors.controls[this.newSponsorsIndex!]
        .get('photo')!
        .addValidators([Validators.required]);
      }
    });
  }

  get sponsors(): FormArray {
    return this.form.get('sponsors') as FormArray;
  }

  get nameField(): AbstractControl {
    return this.sponsorForm.controls['name'];
  }
  get photoField(): AbstractControl {
    return this.sponsorForm.controls['photo'];
  }
}
