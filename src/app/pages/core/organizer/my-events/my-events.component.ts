import { Component, inject, OnInit } from '@angular/core';
import { OrderInterface } from '../../../../models/core';
import { OrderHttpService } from '../../../../services/core';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss',
})
export class MyEventsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  private readonly ordersHttpService = inject(OrderHttpService);

  constructor() {
    this.findOrders();
  }
  orders: OrderInterface[] = [];
  findOrders() {
    this.ordersHttpService
      .findByUser()
      .subscribe((orders) => (this.orders = orders));
  }
}
