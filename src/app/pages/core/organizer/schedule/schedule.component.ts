import { Component, inject, Input, input, OnInit } from '@angular/core';
import { OrderInterface } from '../../../../models/core';
import { OrderHttpService, TicketsHttpService } from '../../../../services/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  private readonly ordersHttpService = inject(OrderHttpService);
  private readonly ticketsHttpService = inject(TicketsHttpService);

  @Input() orders: OrderInterface[] = [];
  ngOnInit(): void {
    this.ordersHttpService
      .findByUser()
      .subscribe((orders) => (this.orders = orders));
  }

  generateTickets(orderId: string) {
    return this.ticketsHttpService
      .generateTickets(orderId)
      .subscribe((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'tickets.pdf';
        a.click();
        window.URL.revokeObjectURL(url); 
      });
  }
}
