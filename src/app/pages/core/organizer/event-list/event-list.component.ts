import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventInterface } from '../../../../models/core';
import { EventsHttpService } from '../../../../services/core';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'organizer-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly eventsHttpService = inject(EventsHttpService);
  private readonly authService = inject(AuthService);
  events: EventInterface[] = [];
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    return this.eventsHttpService
      .findAllByOrganizer(this.authService.currentUser!.id)
      .subscribe((res) => {
        this.events = res;
      });
  }

  createEvent() {
    this.router.navigate(['/core/event/register']);
  }
}
