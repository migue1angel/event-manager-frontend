import {
  Component,
  EventEmitter,
  inject,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SponsorEnum } from '../../../../../shared/enums/fields.enum';
import { MessageValidationService } from '../../../../../services/core/message-validation.service';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss'],
  providers: [MessageService],
})
export class SponsorComponent implements OnInit {
  
  protected form!: FormGroup;
  protected sponsorForm!: FormGroup;
  @Output() formOutput = new EventEmitter();
  protected readonly formBuilder = inject(FormBuilder);
  private readonly messageValidationService = inject(MessageValidationService);
  protected SponsorEnum = SponsorEnum;
  constructor() {}

  ngOnInit(): void {
    this.buildForm();
    this.buildSponsorForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      hasSponsors: [false, [Validators.required]],
      sponsors: this.formBuilder.array([]),
    });
  }

  buildSponsorForm() {
    this.sponsorForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
    });
  }

  onSubmit() {
    if(this.form.valid) {
      this.formOutput.emit(this.form.value);
    }else{
      this.messageValidationService.showMessage();
    } 
  }

  addSponsor() {
    if (this.sponsorForm.valid) {
      this.sponsors.push(this.formBuilder.group(this.sponsorForm.value));
      this.sponsorForm.reset();
    } else {
      this.sponsorForm.markAllAsTouched();
      this.messageValidationService.showMessage();
    }
  }

  editSponsor(index: number) {
    const sponsor = this.sponsors.at(index);
    this.sponsorForm.patchValue(sponsor.value);
    this.sponsors.removeAt(index);
  }

  removeSponsor(index: number) {
    this.sponsors.removeAt(index);
  }

  

  get sponsors(): FormArray {
    return this.form.get('sponsors') as FormArray;
  }

  get nameField(): AbstractControl {
    return this.sponsorForm.controls['name'];
  }

  get emailField(): AbstractControl {
    return this.sponsorForm.controls['email'];
  }

  get hasSponsorsField():AbstractControl {
    return this.form.controls['hasSponsors']
  }
}
