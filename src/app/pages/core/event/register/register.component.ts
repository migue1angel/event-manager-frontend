import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsHttpService } from '../../../../services/core/event-http.service';
import { MessageValidationService } from '../../../../services/core/message-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly messageValidationService = inject(MessageValidationService);
  private readonly router = inject(Router);
  private readonly eventService = inject(EventsHttpService);
  protected readonly formBuilder = inject(FormBuilder);
  protected form!: FormGroup;
  protected index = 0;
  protected isLoading:boolean = false;
  constructor() {
    this.buildForm();
  }
  active: number | undefined = 0;
  buildForm() {
    return (this.form = this.formBuilder.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      state: [null, Validators.required],
      isPublic: [null, Validators.required],
      category: [null, Validators.required],
      organizer: [null, Validators.required],
      address: [null, Validators.required],
      hasSponsors: [true, Validators.required],
      sponsors: [null],
      ticketTypes: [null, Validators.required],
      images: [null, Validators.required],
    }));
  }

  saveData(event: any) {
    this.form.patchValue(event);
    this.index = this.index + 1;
  }

  submit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.eventService.create(this.form.value).subscribe((event) => {
        this.isLoading = false;
        this.router.navigate(['/core/event/organizer/my-events']);
      });
    }else{
      this.messageValidationService.showMessage();
    }
  }

  activeIndexChange(event: any) {
    this.index = event;
  }
}
