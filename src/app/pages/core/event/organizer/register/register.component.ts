import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventsHttpService } from '../../../../../services/core/event-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private readonly eventService = inject(EventsHttpService);
  protected readonly formBuilder = inject(FormBuilder);
  protected form!: FormGroup;

  constructor() {
    this.buildForm();
  }
  active: number | undefined = 0;
  buildForm() {
    return (this.form = this.formBuilder.group({
      name: [null],
      description: [null],
      startDate: [null],
      endDate: [null],
      state: [null],
      isPublic: [null],
      category: [null],
      organizer: [null],
      address: [null],
      hasSponsors: [true],
      sponsors: [null],
      ticketTypes: [null],
      images: [null],
    }));
  }

  saveData(event: any) {
    console.log(event);
    this.form.patchValue(event);
  }

  submit() {
    this.eventService.create(this.form.value).subscribe((event) => {
      console.log(event);
    });
  }
}
