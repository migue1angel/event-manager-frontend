import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsHttpService } from '../../../../../services/core/events-http.service';
import { EventInterface } from '../../../../../models/core/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
})
export class EventListComponent implements OnInit {
  private readonly eventsHttpService = inject(EventsHttpService);
  sidebarVisible: boolean = false;
  events: EventInterface[] = [];
  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    return this.eventsHttpService.findAll().subscribe((res) => {
      this.events = res;
      console.log(this.events);
    });
  }
}
