import { Component, inject, OnInit } from '@angular/core';
import { OrderHttpService } from '../../../../../services/core/order-http.service';
import { OrderInterface } from '../../../../../models/core/order.interface';
import { TicketsHttpService } from '../../../../../services/core/tickets-http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  private readonly ordersHttpService = inject(OrderHttpService);
  private readonly ticketsHttpService = inject(TicketsHttpService);

  protected orders: OrderInterface[] = [];
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
