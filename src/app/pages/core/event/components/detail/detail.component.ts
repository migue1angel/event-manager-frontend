import { Component, inject, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { AddressEnum } from '../../../../../shared/enums';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EventInterface } from '../../../../../models/core/event.interface';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { PaypalService } from '../../../../../services/core/paypal.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@Component({
  standalone: true,
  providers: [MessageService],
  imports: [
    SharedModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CarouselModule,
    InputTextareaModule,
    DropdownModule,
    MessagesModule,
    ReactiveFormsModule,
    InputNumberModule,
    MessageModule,
  ],
  selector: 'event-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  protected form!: FormGroup;
  protected AddressEnum = AddressEnum;
  private readonly router = inject(Router);
  private readonly paypalService = inject(PaypalService);
  private readonly messageService = inject(MessageService);
  private readonly formBuilder = inject(FormBuilder);
  @Input({ required: true }) event!: EventInterface;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ticketType: [null, Validators.required],
      quantity: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      
      this.paypalService.orderData = [ this.form.value ];

      this.router.navigate(['/core/event/register/payment']);
    }
    this.messageService.add({
      severity: 'error',
      detail: 'Complete el formulario',
      life: 3000,
    });
  }
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  get ticketTypeField(): AbstractControl {
    return this.form.controls['ticketType'];
  }

  get quantityField(): AbstractControl {
    return this.form.controls['quantity'];
  }
}
