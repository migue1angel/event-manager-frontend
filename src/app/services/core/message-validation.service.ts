import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class MessageValidationService {
  private readonly messageService = inject(MessageService);

  showMessage() {
    this.messageService.add({
      severity: 'error',
      detail: `Revise que todos los campos se han llenado correctamente`,
      life: 1500,
    });
  }
}
