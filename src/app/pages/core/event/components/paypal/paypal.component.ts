import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { loadScript, PayPalNamespace } from '@paypal/paypal-js';
import { firstValueFrom, map, tap } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { PaypalService } from '../../../../../services/core/paypal.service';
import { AuthService } from '../../../../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-paypal',
  imports: [DataViewModule, ButtonModule, PanelModule],
  templateUrl: './paypal.component.html',
  styleUrl: './paypal.component.scss',
})
export class PaypalComponent implements OnInit {
  private paypal!: PayPalNamespace | null;
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);
  private readonly paypalService = inject(PaypalService);
  constructor() {}
  ngOnInit(): void {
    this.setPaypalButtons();
  }

  tickets: any[] = this.paypalService.orderData;

  dataOrder = {
    userId: this.authService.currentUser!.id,
    orderDetails: this.paypalService.orderData.map((item) => ({
      ticketTypeId: item.ticketType.id,
      quantity: item.quantity,
    })),
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
            console.log(this.dataOrder);

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
              ).pipe(
                tap((res) => console.log(res)),
                tap(() => this.router.navigate(['/core/event/organizer/my-events']))
              )
            );
            
          },
          onCancel: async (data, actions) => {
            const order = await firstValueFrom(
              this.http.post<{ id: string }>(
                `http://localhost:3000/payment/${data['orderID']}/capture-order`,
                data
              )
            );
            console.log(order);
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
