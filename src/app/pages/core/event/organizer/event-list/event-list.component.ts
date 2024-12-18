import { Component, inject, OnInit } from '@angular/core';
import { EventsHttpService } from '../../../../../services/core/event-http.service';
import { EventInterface } from '../../../../../models/core/event.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'organizer-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly eventsHttpService = inject(EventsHttpService);
  events: EventInterface[] = [];
  sidebarVisible: boolean = false;

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    return this.eventsHttpService.findAllByOrganizer().subscribe((res) => {
      this.events = res;
    });
  }

  createEvent(){
    this.router.navigate(['/core/event/register']);
  }
}
