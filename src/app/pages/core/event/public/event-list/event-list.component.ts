import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
sidebarVisible: boolean = false;
  router = inject(Router);

  ngOnInit() {
    console.log(this.router.url);
    
  }}
