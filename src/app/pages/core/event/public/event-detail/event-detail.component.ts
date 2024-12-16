import { Component, inject, OnInit } from '@angular/core';
import { EventInterface } from '../../../../../models/core/event.interface';
import { EventsHttpService } from '../../../../../services/core/event-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss',
})
export class EventDetailComponent implements OnInit {
  private readonly eventsHttpService = inject(EventsHttpService);
  private readonly activatedRoute = inject(ActivatedRoute);
  protected event!: EventInterface;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.eventsHttpService.findById(id)),
        catchError((err) => throwError(() => err))
      )
      .subscribe((res) => {
        
        this.event = res;
      });
  }

  
}
