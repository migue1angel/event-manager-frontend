import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { AddressEnum } from '../../../../../shared/enums';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  standalone: true,
  imports: [
    SharedModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    CarouselModule,
    InputTextareaModule
  ],
  selector: 'event-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  protected AddressEnum = AddressEnum;

  protected dateTest = new Date();

  protected products: any[] = Array.from({ length: 10 }).map((_, i) => ({
    id: i + 1,
    name: `Producto ${i + 1}`,
    description: `Este es el producto ${i + 1}`,
    date: new Date(),
    price: 100,
    inventoryStatus: 'INSTOCK',
  }));

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    // {
    //     breakpoint: '991px',
    //     numVisible: 2,
    //     numScroll: 1
    // },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
];

}
