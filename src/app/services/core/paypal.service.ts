// import { Injectable } from '@angular/core';
// import { loadScript } from '@paypal/paypal-js';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaypalService {
//   private paypal: any;

//   constructor(private http: HttpClient) {}

//   async initializePayPalButtons(
//     containerId: string, 
//     amount: number, 
//     onSuccess: (details: any) => void
//   ) {
//     try {
//       const paypalModule = await loadScript({
//         // 'client-id': environment.paypalClientId,
//         'client-id': 'some_client_id',
//         'currency': 'USD'
//       });

//       if (paypalModule) {
//         paypalModule.Buttons({
//           createOrder: async () => {
//             const response = await this.http.post<{id: string}>(
//             //   `${environment.apiUrl}/paypal/create-order`, 
//               `http://localhost:3000/paypal/create-order`, 
//               { amount }
//             ).toPromise();
//             return response!.id;
//           },
//           onApprove: async (data:any) => {
//             const captureResponse = await this.http.post(
//             //   `${environment.apiUrl}/paypal/capture-order`,
//               `http://localhost:3000/paypal/capture-order`,
//               { orderId: data.orderID }
//             ).toPromise();
//             onSuccess(captureResponse);
//           },
//           onError: (err:any) => {
//             console.error('PayPal Button Error:', err);
//           }
//         }).render(`#${containerId}`);
//       }
//     } catch (error) {
//       console.error('Error inicializando PayPal:', error);
//     }
//   }
// }