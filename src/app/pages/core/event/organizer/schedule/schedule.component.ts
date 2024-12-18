import { Component, inject, OnInit } from '@angular/core';
import { OrderHttpService } from '../../../../../services/core/order-http.service';
import { OrderInterface } from '../../../../../models/core/order.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent implements OnInit {
  private readonly ordersHttpService = inject(OrderHttpService);
  

  protected orders: OrderInterface[] = [];
  ngOnInit(): void {
    this.ordersHttpService
      .findByUser()
      .subscribe((orders) => (this.orders = orders));
  }
}
