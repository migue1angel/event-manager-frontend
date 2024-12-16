import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { AddressEnum } from '../../../../../shared/enums';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { EventInterface } from '../../../../../models/core/event.interface';

@Component({
  standalone: true,
  imports: [
    SharedModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CarouselModule,
    InputTextareaModule,
  ],
  selector: 'event-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  protected AddressEnum = AddressEnum;
  @Input({required:true}) event!: EventInterface;
  
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
}
