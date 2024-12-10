import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { loadScript, PayPalNamespace } from '@paypal/paypal-js';
import { firstValueFrom, map, tap } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-paypal',
  imports: [DataViewModule,ButtonModule, PanelModule],
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.scss',
})
export class PaypalComponent implements OnInit {
  private paypal!: PayPalNamespace | null;
  private readonly http = inject(HttpClient);
  constructor() {}
  ngOnInit(): void {
    this.setPaypalButtons();
  }

  tickets: any[] = [
    { name: 'Ticket 1', category: 'Category 1', quantity: 1, price:50 },
    { name: 'Ticket 2', category: 'Category 2', quantity: 2, price:50 },
    { name: 'Ticket 3', category: 'Category 3', quantity: 3, price:50 },
  ];

  dataOrder = {
    userId: '1',
    orderDetails: [
      {
        ticketTypeId:'aede26f5-e45b-410a-bda3-1d258c8be130',
        quantity: 2,
      },
      {
        ticketTypeId:'d5e5dc21-d2b4-450b-85bf-3f45accf138a',
        quantity: 5,
      },
    ],
  };

  async setPaypalButtons() {
    this.paypal = await loadScript({
      environment: 'sandbox',
      clientId: environment.paypalClientId,
    });

    if (this.paypal) {
      try {
        await this.paypal.Buttons!({
          createOrder: async () => {
            const response = await firstValueFrom(
              this.http
                .post<{ id: string }>(
                  'http://localhost:3000/orders',
                  this.dataOrder
                )
                .pipe(
                  tap((res) => console.log(res)),
                  map((res) => res.id)
                )
            );
            return response;
          },
          onApprove: async (data, actions) => {
            const order = await firstValueFrom(
              this.http.post<{ id: string }>(
                `http://localhost:3000/payment/${data.orderID}/capture-order`,
                data
              )
            );
            console.log(order);
          },
          onCancel: (data, actions) => {
            console.log('OnCancel', data);
          },
          onError: (data) => {
            console.log('OnError', data);
          },
        }).render('#paypal-button-container');
      } catch (error) {
        console.error('failed to render the PayPal Buttons', error);
      }
    }
  }
}
