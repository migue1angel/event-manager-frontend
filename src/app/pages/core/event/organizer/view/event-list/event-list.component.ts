import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  standalone: true,
  imports: [DataViewModule, ButtonModule, TagModule, CommonModule],
})

export class EventListComponent implements OnInit {
  sidebarVisible: boolean = false;

  ngOnInit() {}

  events = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Primer evento de prueba',
      description: 'Descripción para el evento de prueba 1',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Educativo',
      quantity: 24,
      date: '2024-09-23',
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Primer evento de prueba',
      description: 'Descripción para el evento de prueba 1',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Educativo',
      quantity: 24,
      date: '2024-09-23',
      inventoryStatus: 'OUTOFSTOCK', //todo - usar status en listas para saber los eventos que ya han concluido
      rating: 5
  },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Primer evento de prueba',
      description: 'Descripción para el evento de prueba 1',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Educativo',
      quantity: 24,
      date: '2024-09-23',
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Primer evento de prueba',
      description: 'Descripción para el evento de prueba 1',
      image: 'bamboo-watch.jpg',
      price: 'Gratuito',
      category: 'Educativo',
      quantity: 24,
      date: '2024-09-23',
      inventoryStatus: 'LOWSTOCK',
      rating: 5
  },
    
  ]

  getSeverity(product:any) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'secondary';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return undefined;
    }
};
}
