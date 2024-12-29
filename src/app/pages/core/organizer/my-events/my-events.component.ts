import { Component, inject, OnInit } from '@angular/core';
import { OrderInterface } from '../../../../models/core';
import { OrderHttpService } from '../../../../services/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss',
})
export class MyEventsComponent {
  protected readonly authService = inject(AuthService);
}
