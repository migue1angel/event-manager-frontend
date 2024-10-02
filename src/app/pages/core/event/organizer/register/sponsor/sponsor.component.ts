import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, PrimeIcons } from 'primeng/api';
import { SponsorEnum } from '../../../../../../shared/enums';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrl: './sponsor.component.scss',
})
export class SponsorComponent {
  protected form!: FormGroup;
  protected sponsorForm!: FormGroup;
  private messageService = inject(MessageService);
  private readonly formBuilder = inject(FormBuilder);
  protected SponsorEnum = SponsorEnum
  

  constructor() {
    this.buildForm();
    this.buildSponsorForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      sponsors: this.formBuilder.array([], [Validators.minLength(1)]),
    });
  }

  buildSponsorForm() {
    this.sponsorForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      photo: [null, [Validators.required]],
    });
  }

  addSponsor() {
    this.sponsors.push(this.formBuilder.group(this.sponsorForm.value));
  }

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('data enviada');
    }
  }

  get sponsors():FormArray {
    return this.form.get('sponsors') as FormArray;
  }
}
