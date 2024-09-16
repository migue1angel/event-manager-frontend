import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  styleUrl: './event-list.component.scss',
  imports: [CardModule, ButtonModule]
})
export class EventListComponent {

}
