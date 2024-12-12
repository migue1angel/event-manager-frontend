import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessageValidationService {
  private readonly messageService = inject(MessageService);

  showMessage(message: string = 'Revise que todos los campos se han llenado correctamente') {
    this.messageService.add({
      severity: 'error',
      detail: message,
      life: 1500,
    });
  }
}
