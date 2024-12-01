import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { loadScript, PayPalNamespace } from '@paypal/paypal-js';
import { firstValueFrom, map, tap } from 'rxjs';
import { environment } from '../../../../../../environments/environment';

@Component({
  standalone: true,
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.scss',
})
export class PaypalComponent implements OnInit{
  private paypal!: PayPalNamespace | null;
  private readonly http = inject(HttpClient)
  constructor() {}
  ngOnInit(): void {
    console.log(environment.paypalClientId);
    
    this.setPaypalButtons();
  }

  dataOrder = {
    orderId: '12345',
    currency: 'USD',
    items: [
      {
        name: 'Item 1',
        price: 2.99,
        quantity: 10,
      },
      {
        name: 'Item 2',
        price: 5.99,
        quantity: 5,
      },
    ],
  };

  async setPaypalButtons() {
    this.paypal = await loadScript({
      environment: 'sandbox',
      clientId: environment.paypalClientId
    });

    if (this.paypal) {
      try {
        await this.paypal.Buttons!({
          createOrder: async () => {
            const response = await firstValueFrom(
              this.http
                .post<{ id: string }>(
                  'http://localhost:3005/payment/create-order',
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
                `http://localhost:3005/payment/${data.orderID}/capture-order`,
                data
              )
            );
            console.log(order);
          },
          onCancel: (data, actions) => {
            console.log('OnCancel', data);
          },
          onError: ( data) => {
            console.log('OnError', data);
          }
        }).render('#paypal-button-container');
      } catch (error) {
        console.error('failed to render the PayPal Buttons', error);
      }
    }
  }
}
